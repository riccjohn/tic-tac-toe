import * as React from 'react';
// import { PlayerPiece } from '../PlayerPiece';

interface IBoardProps {
  board: Board;
}

class GameBoard extends React.Component<IBoardProps> {
  static defaultProps = {
    board: Array(3)
      .fill(undefined)
      .map(() => Array(3).fill(undefined)),
  };

  public render() {
    const { board } = this.props;
    return (
      <React.Fragment>
        {board ? (
          <div id='board'>
            <table id='game-table'>
              <tbody>
                {board.map((row: Row, rowIdx: number) => (
                  <tr key={rowIdx} className='row'>
                    {row.map((square: Square, squareIdx: number) => (
                      <td key={squareIdx} className='square'>
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
  }
}

export default GameBoard;
