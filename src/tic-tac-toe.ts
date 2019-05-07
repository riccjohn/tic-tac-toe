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

  private checkRowsForWin(): WinData {
    const winData: WinData = {
      hasWinner: false,
      winningCells: [],
    };

    for (const rowIndex in this.board) {
      if (this.board[rowIndex].every(cell => this.isCurrentPlayer(cell))) {
        winData.hasWinner = true;
        for (
          let columnIndex = 0;
          columnIndex < this.board.length;
          columnIndex++
        ) {
          winData.winningCells.push([Number(rowIndex), columnIndex]);
        }
        break;
      }
    }

    return winData;
  }

  private checkColumnsForWin(): WinData {
    const winData: WinData = {
      hasWinner: false,
      winningCells: [],
    };

    const transposedBoard = this.eachIndex().map(i =>
      this.board.map(row => row[i])
    );

    winData.hasWinner = transposedBoard.some(row =>
      row.every(this.isCurrentPlayer)
    );

    if (winData.hasWinner) {
      transposedBoard.forEach((row, rowIndex) => {
        if (row.every(value => this.isCurrentPlayer(value))) {
          const vectors = [];
          for (let i = 0; i < row.length; i++) {
            vectors.push([rowIndex, i]);
          }
          winData.winningCells = transposeVectors(vectors);
        }
      });
    }

    return winData;
  }

  private checkDiagonalsForWin(): WinData {
    const leftToRightDiagonalWin = this.eachIndex()
      .map(i => this.board[i][i])
      .every(this.isCurrentPlayer);

    const rightToLeftDiagonalWin = this.eachIndex()
      .map(i => this.board[i][this.boardSize - 1 - i])
      .every(this.isCurrentPlayer);

    const winData: WinData = {
      hasWinner: leftToRightDiagonalWin || rightToLeftDiagonalWin,
      winningCells: [],
    };

    if (winData.hasWinner) {
      if (leftToRightDiagonalWin) {
        winData.winningCells = this.eachIndex().map(i => [i, i]);
      } else {
        winData.winningCells = this.eachIndex().map(i => [
          i,
          this.boardSize - 1 - i,
        ]);
      }
    }

    return winData;
  }

  private checkGameForWin(): void {
    const winChecks = [
      this.checkRowsForWin(),
      this.checkColumnsForWin(),
      this.checkDiagonalsForWin(),
    ];

    for (const check of winChecks) {
      if (check.hasWinner) {
        this.winner = this.currentPlayer;
        this.winningCells = check.winningCells;
      }
    }
  }
}

export default Game;
