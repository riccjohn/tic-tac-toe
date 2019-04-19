import * as React from 'react';
import Game from '../tic-tac-toe';
import { GameBoard, BoardSizeForm } from './index';

type GameState = {
  board?: Board;
  boardSize?: number;
};

class TicTacToe extends React.Component<object, GameState> {
  private game: Game = new Game();

  public state = {
    board: undefined,
    boardSize: undefined,
  };

  public handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      boardSize: Number(event.currentTarget.value),
    });
  };

  public submitBoardSize = (event: React.FormEvent<HTMLFormElement>): void => {
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

  public resetGame = (): void => {
    this.setState({
      board: undefined,
    });
  };

  public render() {
    const { board } = this.state;
    return (
      <div className='container center'>
        <div className='center-container center column'>
          <h1>Tic Tac Toe</h1>
          {!board ? (
            <BoardSizeForm
              handleChange={this.handleChange}
              handleSubmit={this.submitBoardSize}
            />
          ) : (
            <GameBoard
              data={board}
              handlePlayerInput={this.handlePlayerInput}
              reset={this.resetGame}
            />
          )}
        </div>
      </div>
    );
  }
}

export default TicTacToe;
