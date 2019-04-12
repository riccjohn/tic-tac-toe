import * as React from 'react';
import { Square, Row, Board } from '../constants';

class Game extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      board: [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
      ],
    };
  }

  public render() {
    const { board } = this.state;
    return (
      <div className='container center'>
        <div className='center-container center column'>
          <h1>Tic Tac Toe</h1>
          <button>New Game</button>
          <table>
            <tbody>
              {board.map((row: Row, _idx: number) => (
                <tr key={_idx}>
                  {row.map((square: Square, _idx: number) => (
                    <td key={_idx}>{square || '•'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Game;
