import * as React from 'react';
import Game from '../tic-tac-toe';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      boardSize: undefined,
      game: undefined,
    };
  }

  public handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      boardSize: event.currentTarget.value,
    });
  };

  public submitBoardSize = (event: any): void => {
    event.preventDefault();
    this.setState({
      game: new Game(this.state.boardSize),
    });
  };

  public handlePlayerInput = (coords: ICoords): void => {
    console.log('PARENT', coords.row, coords.col);
  };

  public render() {
    const { game } = this.state;
    return (
      <div className='container center'>
        <div className='center-container center column'>
          <h1>Tic Tac Toe</h1>
          <p>What size should the board be?</p>
          <form onSubmit={this.submitBoardSize}>
            Board Size:
            <input onChange={this.handleChange} type='text' name='size' />
            <input type='submit' value='submit' />
          </form>
          {this.state.game ? (
            <GameBoard
              data={game.board}
              handlePlayerInput={this.handlePlayerInput}
            />
          ) : (
            <p> Start a new game</p>
          )}
        </div>
      </div>
    );
  }
}

export default TicTacToe;
