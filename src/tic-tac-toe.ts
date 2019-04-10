enum PlayerPiece {
  X = "X",
  O = "O"
}

type Square = PlayerPiece | undefined;
type Row = Square[];
type Board = Row[];

class Game {
  public board: Board;
  private currentPlayer: PlayerPiece;
  public winner: PlayerPiece | undefined;

  constructor(private boardSize: number = 3) {
    this.currentPlayer = PlayerPiece.X;
    this.board = this.generateBoard();
  }

  generateBoard(): Board {
    let board = [];
    for (let i = 0; i < this.boardSize; i++) {
      let row = [];
      for (let j = 0; j < this.boardSize; j++) {
        row.push(undefined);
      }
      board.push(row);
    }
    return board;
  }

  switchPlayers(): void {
    if (this.currentPlayer === PlayerPiece.X)
      this.currentPlayer = PlayerPiece.O;
    else this.currentPlayer = PlayerPiece.X;
  }

  place(x: number, y: number): void {
    if (!this.board[x][y]) {
      this.board[x][y] = this.currentPlayer;
      this.checkGameForWin();
      this.switchPlayers();
    }
  }

  checkRowForWin(rowNumber: number): boolean {
    const squaresInRow = this.board[rowNumber];
    return squaresInRow.every(square => square === this.currentPlayer);
  }

  checkColumnForWin(colNumber: number): boolean {
    const squaresInColumn = this.board.map(row => row[colNumber]);
    return squaresInColumn.every(square => square === this.currentPlayer);
  }

  checkDiagonalsForWin(): boolean {
    const diagonalValues = [];
    const diagonalValuesRightLeft = [];
    for (let i = 0; i < this.boardSize; i++) {
      diagonalValues.push(this.board[i][i]);
      diagonalValuesRightLeft.push(this.board[i][this.boardSize - 1 - i]);
    }
    return (
      diagonalValues.every(square => square === this.currentPlayer) ||
      diagonalValuesRightLeft.every(square => square === this.currentPlayer)
    );
  }

  checkGameForWin(): void {
    let winCondition = false;
    for (let i = 0; i < this.boardSize; i++) {
      winCondition = winCondition || this.checkRowForWin(i);
      winCondition = winCondition || this.checkColumnForWin(i);
    }
    winCondition = winCondition || this.checkDiagonalsForWin();

    if (winCondition) {
      this.winner = this.currentPlayer;
    }
  }
}

export default Game;
