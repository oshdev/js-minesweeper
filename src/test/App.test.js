import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import App from '../App';

it('renders without crashing', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('App')).toBeDefined();
});

it('renders a mine field', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('App')).toBeDefined();
});

it('re-renders a new mine field', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('App')).toBeDefined();
  const newGameButton = getByTestId('newGameButton');
  fireEvent.click(newGameButton);
  expect(newGameButton).toBeDisabled();
});