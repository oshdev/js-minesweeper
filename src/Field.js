import React from "react";
import "./Field.css";
import Box from "./Box";
import MineFieldGenerator from "./MineFieldGenerator";

const Field = ({ difficulty, rows, columns, mines }) => {
  const field = new MineFieldGenerator().generateField(
    difficulty,
    rows,
    columns,
    mines
  );
  return (
    <table data-testid="Field">
      <tbody>
        {field.map((row, rowIndex) => (
          <tr key={Math.random()}>
            {row.map((column, columnIndex) => (
              <td key={Math.random()}>
                <Box isMine={column} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Field.defaultProps = {
  rows: 1,
  columns: 1,
  mines: 0
};

export default Field;
