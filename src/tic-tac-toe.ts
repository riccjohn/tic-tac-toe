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
    const hasWinner = this.board.some(row => row.every(this.isCurrentPlayer));

    const winningCells: number[][] = [];

    if (hasWinner) {
      this.board.forEach((row, rowIndex) => {
        if (row.every(value => this.isCurrentPlayer(value))) {
          for (let i = 0; i < row.length; i++) {
            winningCells.push([rowIndex, i]);
          }
        }
      });
      this.winningCells = winningCells;
    }

    return hasWinner;
  }

  private checkColumnsForWin(): boolean {
    const transposedBoard = this.eachIndex().map(i =>
      this.board.map(row => row[i])
    );

    return transposedBoard.some(row => row.every(this.isCurrentPlayer));
  }

  private checkDiagonalsForWin(): boolean {
    const diagonals = [
      this.eachIndex().map(i => this.board[i][i]),
      this.eachIndex().map(i => this.board[i][this.boardSize - 1 - i]),
    ];

    return diagonals.some(values => values.every(this.isCurrentPlayer));
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
