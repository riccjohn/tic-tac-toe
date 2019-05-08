class Game {
  public board: Board;
  public winningVector: WinningVector;
  private currentPlayer: PlayerPiece;
  public winner: PlayerPiece | undefined;

  constructor(private boardSize: number = 3) {
    this.currentPlayer = 'X';
    this.board = this.generateBoard();
    this.winner = undefined;
    this.winningVector = [];
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

  private checkRowsForWin(): WinningVector | undefined {
    for (let rowIndex = 0; rowIndex < this.board.length; rowIndex++) {
      const row = this.board[rowIndex];
      const vector: WinningVector = [];
      for (let colIndex = 0; colIndex < this.board.length; colIndex++) {
        const square = row[colIndex];
        if (this.isCurrentPlayer(square)) {
          vector.push({ row: rowIndex, col: colIndex });
        }
      }
      if (vector.length === this.boardSize) {
        return vector;
      }
    }
    return;
  }

  private checkColumnsForWin(): WinningVector | undefined {
    const transposedBoard = this.eachIndex().map(i =>
      this.board.map(row => row[i])
    );

    for (let colIndex = 0; colIndex < transposedBoard.length; colIndex++) {
      const column = transposedBoard[colIndex];
      const vector: WinningVector = [];

      for (let rowIndex = 0; rowIndex < transposedBoard.length; rowIndex++) {
        const square = column[rowIndex];
        if (this.isCurrentPlayer(square)) {
          vector.push({ row: rowIndex, col: colIndex });
        }
      }
      if (vector.length === this.boardSize) {
        return vector;
      }
    }
    return;
  }

  private checkDiagonalsForWin(): WinningVector | undefined {
    const leftToRightDiagonalWin = this.eachIndex()
      .map(i => this.board[i][i])
      .every(this.isCurrentPlayer);

    if (leftToRightDiagonalWin) {
      return this.eachIndex().map(i => {
        return { row: i, col: i };
      });
    }

    const rightToLeftDiagonalWin = this.eachIndex()
      .map(i => this.board[i][this.boardSize - 1 - i])
      .every(this.isCurrentPlayer);

    if (rightToLeftDiagonalWin) {
      return this.eachIndex().map(i => {
        return { row: i, col: this.boardSize - 1 - i };
      });
    }

    return;
  }

  private checkGameForWin(): void {
    const winVectors = [
      this.checkRowsForWin(),
      this.checkColumnsForWin(),
      this.checkDiagonalsForWin(),
    ];

    if (winVectors.some(vector => !!vector)) {
      this.winningVector = winVectors.find(vector => !!vector) || [];
      this.winner = this.currentPlayer;
    }
  }
}

export default Game;
