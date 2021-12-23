import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BoxMainBody from './BoxMainBody';

describe('<BoxMainBody />', () => {
  test('it should mount', () => {
    render(<BoxMainBody />);
    
    const boxMainBody = screen.getByTestId('BoxMainBody');

    expect(boxMainBody).toBeInTheDocument();
  });
});