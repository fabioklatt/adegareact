import React from 'react';
import { render, screen } from '@testing-library/react';
import Adega from './Adega';

test('renders learn react link', () => {
  render(<Adega />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
