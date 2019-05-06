import { transposeVectors } from './helperFunctions/transpose';

class Game {
  public board: Board;
  public winner: PlayerPiece | undefined;
  public winningCells: number[][] | undefined;
  private currentPlayer: PlayerPiece;

  constructor(private boardSize: number = 3) {
    this.currentPlayer = 'X';
    this.board = this.generateBoard();
    this.winningCells = undefined;
  }

  public place(x: number, y: number): void {
    if (!this.board[x][y]) {
      this.board[x][y] = this.currentPlayer;
      this.checkGameForWin();
      this.switchPlayers();
    }
  }

  private generateBoard(): Board {
    return this.eachIndex().map(() => this.eachIndex().map(() => undefined));
  }

  private switchPlayers(): void {
    if (this.currentPlayer === 'X') {
      this.currentPlayer = 'O';
    } else {
      this.currentPlayer = 'X';
    }
  }

  private eachIndex(): number[] {
    const array = [];
    for (let i = 0; i < this.boardSize; i++) {
      array.push(i);
    }
    return array;
  }

  private isCurrentPlayer = (square: Square): boolean => {
    return square === this.currentPlayer;
  };

  private checkRowsForWin(): boolean {
    const winningCells: Vectors = [];
    let hasWinner: boolean = false;

    for (const rowIndex in this.board) {
      if (this.board[rowIndex].every(cell => this.isCurrentPlayer(cell))) {
        hasWinner = true;
        for (
          let columnIndex = 0;
          columnIndex < this.board.length;
          columnIndex++
        ) {
          winningCells.push([Number(rowIndex), columnIndex]);
        }
        this.winningCells = winningCells;
        break;
      }
    }

    return hasWinner;
  }

  private checkColumnsForWin(): boolean {
    const transposedBoard = this.eachIndex().map(i =>
      this.board.map(row => row[i])
    );

    const hasWinner = transposedBoard.some(row =>
      row.every(this.isCurrentPlayer)
    );

    const winningCells: Vectors = [];

    if (hasWinner) {
      transposedBoard.forEach((row, rowIndex) => {
        if (row.every(value => this.isCurrentPlayer(value))) {
          for (let i = 0; i < row.length; i++) {
            winningCells.push([rowIndex, i]);
          }
        }
      });
      this.winningCells = transposeVectors(winningCells);
    }

    return hasWinner;
  }

  private checkDiagonalsForWin(): boolean {
    const leftToRightDiagonalWin = this.eachIndex()
      .map(i => this.board[i][i])
      .every(this.isCurrentPlayer);

    const rightToLeftDiagonalWin = this.eachIndex()
      .map(i => this.board[i][this.boardSize - 1 - i])
      .every(this.isCurrentPlayer);

    const hasWinner = leftToRightDiagonalWin || rightToLeftDiagonalWin;

    let winningCells: Vectors;

    if (hasWinner) {
      if (leftToRightDiagonalWin) {
        winningCells = this.eachIndex().map(i => [i, i]);
      } else {
        winningCells = this.eachIndex().map(i => [i, this.boardSize - 1 - i]);
      }
      this.winningCells = winningCells;
    }

    return hasWinner;
  }

  private checkGameForWin(): void {
    const winCondition = [
      this.checkRowsForWin(),
      this.checkColumnsForWin(),
      this.checkDiagonalsForWin(),
    ];

    if (winCondition.some(winnerCheck => winnerCheck)) {
      this.winner = this.currentPlayer;
    }
  }
}

export default Game;
