import * as React from 'react';

function GameBoard(props: BoardProps) {
  const { data, handlePlayerInput, reset, winner, getValue } = props;

  return data ? (
    <div id='board' className='center column'>
      {winner && <h1>{`Winner is ${winner}`}</h1>}
      <table id='game-table'>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className='row'>
              {row.map((square, columnIndex) => (
                <td
                  key={columnIndex}
                  className='square'
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
  ) : (
    <h1>NO_BOARD</h1>
  );
}

GameBoard.defaultProps = {
  getValue: (square: Square) => square,
};

export default GameBoard;
