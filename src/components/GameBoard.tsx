import * as React from 'react';

const GameBoard: React.SFC<BoardProps> = props => {
  const { data, handlePlayerInput } = props;
  const handleClick = (row: number, col: number): any => {
    const coords = { row, col };
    handlePlayerInput(coords);
  };

  return data ? (
    <div id='board'>
      <table id='game-table'>
        <tbody>
          {data.map((row: Row, rowIndex: number) => (
            <tr key={rowIndex} className='row'>
              {row.map((square: Square, columnIndex: number) => (
                <td
                  key={columnIndex}
                  className='square'
                  onClick={() => handleClick(rowIndex, columnIndex)}
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
