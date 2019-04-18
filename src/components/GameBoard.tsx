import * as React from 'react';

const GameBoard: React.SFC<IBoardProps> = props => {
  const { data } = props;
  const handleClick = (row: number, col: number): any => {
    const coords = { row, col };
    props.handlePlayerInput(coords);
  };

  return (
    <React.Fragment>
      {data ? (
        <div id='board'>
          <table id='game-table'>
            <tbody>
              {data.map((row: Row, rowIdx: number) => (
                <tr key={rowIdx} className='row'>
                  {row.map((square: Square, colIdx: number) => (
                    <td
                      key={colIdx}
                      className='square'
                      onClick={() => handleClick(rowIdx, colIdx)}
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
      )}
    </React.Fragment>
  );
};

export default GameBoard;
