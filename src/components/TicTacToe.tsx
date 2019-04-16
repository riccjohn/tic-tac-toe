import * as React from 'react';
import Game from '../tic-tac-toe';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      board: null,
      boardSize: null,
    };
  }

  public handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      boardSize: event.currentTarget.value,
    });
  };

  public submitBoardSize = (event: any): void => {
    event.preventDefault();
    const newGame = new Game(Number(this.state.boardSize));
    this.setState({
      board: newGame.board,
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
          {this.state.board ? (
            <GameBoard board={this.state.board} />
          ) : (
            <p> Start a new game</p>
          )}
        </div>
      </div>
    );
  }
}

export default TicTacToe;
