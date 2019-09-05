import each from 'jest-each';
import MineFieldGenerator from '../MineFieldGenerator';

each([
  ["beginner", 9, 9, 10],
  ["intermediate", 13, 15, 40],
  ["expert", 16, 30, 99],
  ["custom", 1, 1, 0],
  ["custom", 50, 50, 50 * 50 - 1]
]).it(
  "generates field with correct amount of boxes and mines",
  (difficulty, rows, columns, mines) => {
    let minesCount = 0;

    const field = new MineFieldGenerator().generateField(
      difficulty,
      rows,
      columns,
      mines
    );

    expect(field.length).toBe(rows);
    for (let row = 0; row < field.length; ++row) {
      expect(field[row].length).toBe(columns);
      for (let column = 0; column < field[row].length; ++column) {
        if (field[row][column]) {
          ++minesCount;
        }
      }
    }
    expect(minesCount).toBe(mines);
  }
);
