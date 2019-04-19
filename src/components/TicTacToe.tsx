import * as React from 'react';
import Game from '../tic-tac-toe';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component<any, any> {
  private game: Game = new Game();

  constructor(props: {}) {
    super(props);
    this.state = {
      board: undefined,
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
    this.game = new Game(this.state.boardSize);
    this.setState({
      board: this.game.board,
    });
  };

  public handlePlayerInput = (coords: Coords): void => {
    this.game.place(coords.row, coords.col);
    this.setState({
      board: this.game.board,
    });
  };

  public render() {
    const { board } = this.state;
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
          {board ? (
            <GameBoard
              data={board}
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
