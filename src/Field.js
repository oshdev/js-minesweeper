import React from "react";
import "./Field.css";
import Box from "./Box";
import MineFieldGenerator, { prepareParams } from "./MineFieldGenerator";

const Field = props => {
  const field = new MineFieldGenerator().generateField(...prepareParams(props));
  return (
    <table data-testid="Field">
      <tbody>
        {field.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((column, columnIndex) => (
              <td key={columnIndex}>
                <Box isMine={column} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Field;
