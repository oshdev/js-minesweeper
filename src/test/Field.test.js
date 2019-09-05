import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import each from 'jest-each'
import { render } from '@testing-library/react'
import Field from '../Field'

each([
  ['beginner', 9, 9],
  // ['intermediate', 13, 15],
  // ['expert', 16, 30],
  // ['custom', 1, ],
  // ['custom', 50, 50],
]).it('renders field', (difficulty, rows, columns) => {
  const { getByTestId, getAllByTestId } = render(<Field difficulty={difficulty}/>);
  expect(getByTestId('Field')).toBeDefined();
  expect(getAllByTestId('Box')).toHaveLength(rows * columns);
});

