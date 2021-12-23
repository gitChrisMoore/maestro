import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BoxMainTitle from './BoxMainTitle';

describe('<BoxMainTitle />', () => {
  test('it should mount', () => {
    render(<BoxMainTitle />);
    
    const boxMainTitle = screen.getByTestId('BoxMainTitle');

    expect(boxMainTitle).toBeInTheDocument();
  });
});