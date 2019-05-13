import * as React from 'react';
import { containsCoordinates } from '../helperFunctions/contains';

function GameBoard(props: BoardProps) {
  const {
    data,
    handlePlayerInput,
    reset,
    getValue,
    winningVector,
    winner,
  } = props;

  return (
    <div id='board' className='center column'>
      {winner && <h1>{`Winner is ${winner}`}</h1>}
      <table id='game-table'>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className='row'>
              {row.map((square, columnIndex) => (
                <td
                  key={columnIndex}
                  className={
                    containsCoordinates(winningVector, {
                      col: columnIndex,
                      row: rowIndex,
                    })
                      ? 'square winner'
                      : 'square'
                  }
                  onClick={() =>
                    handlePlayerInput({ row: rowIndex, col: columnIndex })
                  }
                >
                  {getValue(square)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className='reset' onClick={reset}>
        Reset
      </button>
    </div>
  );
}

GameBoard.defaultProps = {
  getValue: (square: Square) => square,
};

export default GameBoard;
