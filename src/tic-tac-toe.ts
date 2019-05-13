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
    for (let rowIndex = 0; rowIndex < this.boardSize; rowIndex++) {
      const row = this.board[rowIndex];
      const vector: WinningVector = [];
      for (let colIndex = 0; colIndex < this.boardSize; colIndex++) {
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

    for (let colIndex = 0; colIndex < this.boardSize; colIndex++) {
      const column = transposedBoard[colIndex];
      const vector: WinningVector = [];

      for (let rowIndex = 0; rowIndex < this.boardSize; rowIndex++) {
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
    const topLeftToBottomRight = this.eachIndex().map(i => ({
      col: i,
      row: i,
    }));

    const topRightToBottomLeft = this.eachIndex().map(i => ({
      col: this.boardSize - 1 - i,
      row: i,
    }));

    const diagonals: WinningVector[] = [
      topLeftToBottomRight,
      topRightToBottomLeft,
    ];

    return diagonals.find(diagonal => {
      return diagonal.every(square =>
        this.isCurrentPlayer(this.board[square.row][square.col])
      );
    });
  }

  private checkGameForWin(): void {
    const winVectors = [
      this.checkRowsForWin(),
      this.checkColumnsForWin(),
      this.checkDiagonalsForWin(),
    ];

    this.winningVector = winVectors.find(vector => !!vector) || [];

    if (this.winningVector.length >= this.boardSize) {
      this.winner = this.currentPlayer;
    }
  }
}

export default Game;
