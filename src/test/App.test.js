import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
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
  const { getByTestId, getAllByTestId } = render(<App />);
  expect(getByTestId('App')).toBeDefined();
  fireEvent.click(getByTestId('newGameButton'));
  const boxes = getAllByTestId("Box");
  expect(boxes).toHaveLength(9 * 9);
  boxes.forEach(e => {
    expect(e).toBeEnabled();
  });
});
