import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BoxMain from './BoxMain';

describe('<BoxMain />', () => {
  test('it should mount', () => {
    render(<BoxMain />);
    
    const boxMain = screen.getByTestId('BoxMain');

    expect(boxMain).toBeInTheDocument();
  });
});