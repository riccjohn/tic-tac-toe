import * as React from 'react';
import Game from '../tic-tac-toe';
import GameBoard from './GameBoard';
import BoardSizeForm from './BoardSizeForm';

class TicTacToe extends React.Component<object, GameState> {
  private game: Game = new Game();

  public state = {
    board: undefined,
    boardSize: undefined,
    hasError: false,
  };

  private validateBoardSizeInput = (): boolean => {
    const size = this.state.boardSize;
    if (size === undefined) {
      return true;
    }
    const isPresent = size !== null;
    const threeOrAbove = size >= 3;
    const elevenOrBelow = size <= 10;
    const isValidInput = threeOrAbove && elevenOrBelow && isPresent;
    return isValidInput;
  };

  public handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      boardSize: Number(event.currentTarget.value),
    });
  };

  public submitBoardSize = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (this.validateBoardSizeInput()) {
      this.game = new Game(this.state.boardSize);
      this.setState({
        board: this.game.board,
      });
    } else {
      this.setState({
        hasError: true,
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
      hasError: false,
    });
  };

  public render() {
    const { board } = this.state;
    const inputHandler = this.game.winner ? () => {} : this.handlePlayerInput;
    return (
      <div className='container center'>
        <div className='center-container center column'>
          <h1>Tic Tac Toe</h1>
          {!board ? (
            <BoardSizeForm
              handleChange={this.handleChange}
              handleSubmit={this.submitBoardSize}
              hasError={this.state.hasError}
            />
          ) : (
            <GameBoard
              data={board}
              handlePlayerInput={inputHandler}
              reset={this.resetGame}
              winner={this.game.winner}
            />
          )}
        </div>
      </div>
    );
  }
}

export default TicTacToe;
