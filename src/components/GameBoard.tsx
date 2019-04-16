import * as React from 'react';
// import { PlayerPiece } from '../PlayerPiece';

interface IBoardProps {
  board: Board;
}

class GameBoard extends React.Component<IBoardProps> {
  static defaultProps = {
    board: [
      ['X', undefined, undefined],
      [undefined, 'X', undefined],
      [undefined, undefined, 'O'],
    ],
  };

  public render() {
    const { board } = this.props;
    return (
      <React.Fragment>
        {board ? (
          <div id='board'>
            <table id='game-table'>
              <tbody>
                {board.map((row: Row) => (
                  <tr className='row'>
                    {row.map((square: Square) => (
                      <td className='square'>{square || '•'}</td>
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
  }
}

export default GameBoard;
