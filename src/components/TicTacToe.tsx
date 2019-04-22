import * as React from 'react';
import Game from '../tic-tac-toe';
import { GameBoard, BoardSizeForm } from './index';

type GameState = {
  board?: Board;
  boardSize?: number;
  error?: boolean;
};

class TicTacToe extends React.Component<object, GameState> {
  private game: Game = new Game();

  public state = {
    board: undefined,
    boardSize: undefined,
    error: false,
  };

  private validateBoardSizeInput = (size?: number): boolean => {
    if (size === undefined) {
      return true;
    }
    const isNotNull = size !== null;
    const threeOrAbove = size >= 3;
    const elevenOrBelow = size <= 10;
    const isValidInput = threeOrAbove && elevenOrBelow && isNotNull;
    return isValidInput;
  };

  public handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      boardSize: Number(event.currentTarget.value),
    });
  };

  public submitBoardSize = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    /* TODO: an undefined value should still pass, since a user should be able
    to create a 3x3 by default. Maybe I need to set a default value in the actual form? */
    if (this.validateBoardSizeInput(this.state.boardSize)) {
      this.game = new Game(this.state.boardSize);
      this.setState({
        board: this.game.board,
      });
    } else {
      this.setState({
        error: true,
      });
    }
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
      error: false,
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
              error={this.state.error}
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
