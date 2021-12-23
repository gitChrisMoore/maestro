import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BoxMainFooter from './BoxMainFooter';

describe('<BoxMainFooter />', () => {
  test('it should mount', () => {
    render(<BoxMainFooter />);
    
    const boxMainFooter = screen.getByTestId('BoxMainFooter');

    expect(boxMainFooter).toBeInTheDocument();
  });
});