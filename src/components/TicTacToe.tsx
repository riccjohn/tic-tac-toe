import * as React from 'react';
import Game from '../tic-tac-toe';
import { GameBoard, BoardSizeForm } from './index';

type GameState = {
  board?: Board;
  boardSize?: number;
  error?: string;
};

class TicTacToe extends React.Component<object, GameState> {
  private game: Game = new Game();

  public state = {
    board: undefined,
    boardSize: undefined,
    error: undefined,
  };

  private validateBoardSizeInput = (size: number = 0): boolean => {
    const threeOrAbove = size >= 3;
    const elevenOrBelow = size <= 10;
    const isValidInput = threeOrAbove && elevenOrBelow;
    return isValidInput;
  };

  public handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      boardSize: Number(event.currentTarget.value),
    });
  };

  public submitBoardSize = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (this.validateBoardSizeInput(this.state.boardSize)) {
      this.game = new Game(this.state.boardSize);
      this.setState({
        board: this.game.board,
      });
    } else {
      this.setState({
        error: 'Invalid input',
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
