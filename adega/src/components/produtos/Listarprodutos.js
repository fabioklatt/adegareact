import React from 'react';

import conchaytoro from '../../imagens/conchaytoro.jpg';
import chilanorose from '../../imagens/chilanorose.jpg' ;
import cordillerabranco from '../../imagens/cordillerabranco.jpg' ;
import criosbranco from '../../imagens/criosbranco.jpg' ;
import fronterabranco from '../../imagens/fronterabranco.jpg' ;
import juliafloristatinto from '../../imagens/juliafloristatinto.jpg' ;
import mateusrose from '../../imagens/mateusrose.jpg' ;
import nortonmalbectinto from '../../imagens/nortonmalbectinto.jpg' ;


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';

function Listarprodutos(props){

    const produtos = [
        { nome: 'Concha Y Toro ', preco: 'R$ 59,99'},
        { nome: 'Chilano Rosé ', preco: 'R$ 57,99'},
        { nome: 'Cordillera Branco ', preco: 'R$ 38,99'},
        { nome: 'Crios de Branco ', preco: 'R$ 45,99'},
        { nome: 'Frontera Branco ', preco: 'R$ 47,99'},
        { nome: 'Julia Florista Tinto ', preco: 'R$ 54,99'},
        { nome: 'Mateus Rosé ', preco: 'R$ 60,99'},
        { nome: 'Norton Malbec Tinto ', preco: 'R$ 59,99'},
        
    ];

    function handleComprar (event, produto){
        event.preventDefault();
        props.adicionarProduto (produto);
        props.exibirMensagem(produto);

        
    }

    function render (){
        let key = 1;
        const cards = produtos.map(produto =>
        <Card 
        key={key}
        data-testid={'card' + key++}
          style={{ width: '18rem', margin: '10px', float: 'left' }}>
        <Card.Img variant="top" src={conchaytoro} />
        <Card.Body className="text-center">
        <Card.Title style={{ height: '40px'}}>

        </Card.Title>
        <Card.Text>

        </Card.Text>
        <Button
            variant="danger"
            style={{ width: '100%'}}
            onClick={(event) => handleComprar (event, produto)}>
                Comprar ({produto.preco})

            </Button>
    
        </Card.Body>
        </Card>
        );
        return cards;
    }
   
   return render ();

}
Listarprodutos.PropTypes = {
    adicionarProduto: PropTypes.func.isRequired,
    exibirMensagem: PropTypes.func.isRequired
    
}

export default Listarprodutos;