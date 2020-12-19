
import React, { useState } from 'react';
import './Adega.css';
import Menu from './components/menu/Menu.js';
import Produtos from './components/produtos/Produtos';
import Checkout from './components/checkout/Checkout';

function Adega() {

   const [carrinho, setCarrinho] = useState({ produtos: []});
   const [exibirProdutos, setExibirProdutos] = useState(true);
   const [exibirCheckout, setExibirCheckout] = useState(false);
   const [total, setTotal] = useState('0,00');

   function adicionarProduto(produto){
      const objCarrinho = Object.assign({}, carrinho);

      //atualizar quantidade
      let novoProduto = true;
      objCarrinho.produtos.forEach((prod, indice) => {
         if (prod.nome === produto.nome) {
           objCarrinho.produtos[indice].quantidade++;
           novoProduto = false;
         }
      });

      if (novoProduto){
        objCarrinho.produtos.push({
          nome: produto.nome, preco: produto.preco, quantidade: 1
        })
      }

      setCarrinho(objCarrinho);
   }

   function handleExibirProdutos(){
     setExibirProdutos (false);
     setExibirProdutos (true);
   }

   function handleExibirCheckout (total){
       setExibirCheckout (true);
       setExibirCheckout (false);
       setTotal (total);
   }

  return (
    <div>
      <Menu 
      produtos={carrinho.produtos}
      handleExibirProdutos={handleExibirProdutos}
      handleExibirCheckout={handleExibirCheckout}/>
      <Produtos 
       visivel={exibirProdutos}
       adicionarProduto={adicionarProduto}/>
      <Checkout />
    </div>
  );
}

export default Adega;
