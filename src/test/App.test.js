import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from '../App';

it('renders without crashing', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('App')).toBeDefined();
});

it('renders a mine field', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('App')).toBeDefined();
});
