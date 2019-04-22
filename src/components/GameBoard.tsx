import * as React from 'react';

const GameBoard: React.SFC<BoardProps> = props => {
  const { data, handlePlayerInput } = props;

  return data ? (
    <div id='board'>
      <table id='game-table'>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className='row'>
              {row.map((square, columnIndex) => (
                <td
                  key={columnIndex}
                  className='square'
                  onClick={() => handlePlayerInput({row: rowIndex, col: columnIndex})}
                >
                  {square || '•'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <h1>NO_BOARD</h1>
  );
};

export default GameBoard;
