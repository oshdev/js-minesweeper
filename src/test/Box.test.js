import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react'
import Box from '../Box';

it('renders without crashing', () => {
  const { getByTestId } = render(<Box />);
  expect(getByTestId('Box')).toBeDefined();
});

it('allows to click once and just once', () => {
  const { getByTestId } = render(<Box/>);
  const box = getByTestId('Box');
  fireEvent.click(box);
  expect(box).toBeDisabled();
});

it('detonates a mine', () => {
  const { getByTestId } = render(<Box isMine={true}/>);
  const box = getByTestId('Box');
  fireEvent.click(box);
  expect(box.innerHTML).toBe('@');
});

