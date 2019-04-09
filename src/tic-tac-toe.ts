type Square = string;
type Row = Square[];
type Board = Row[];

class Game {
  public board: Board;
  private currentPlayer: string;
  public winner: string;

  constructor() {
    this.currentPlayer = "X";
    this.board = [["", "", ""], ["", "", ""], ["", "", ""]];
    this.winner = "";
  }

  switchPlayers() {
    if (this.currentPlayer === "X") this.currentPlayer = "O";
    else this.currentPlayer = "X";
  }

  place(x: number, y: number) {
    if (this.board[x][y] === "") {
      this.board[x][y] = this.currentPlayer;
      this.checkGameStatus();
      this.switchPlayers();
    }
  }

  checkRow(rowNumber: number) {
    if (this.board[rowNumber][0] === this.currentPlayer) {
      if (
        this.board[rowNumber][1] === this.currentPlayer &&
        this.board[rowNumber][2] === this.currentPlayer
      )
        this.winner = this.currentPlayer;
    }
  }

  checkColumn(colNumber: number) {
    if (this.board[0][colNumber] === this.currentPlayer) {
      if (
        this.board[1][colNumber] === this.currentPlayer &&
        this.board[2][colNumber] === this.currentPlayer
      )
        this.winner = this.currentPlayer;
    }
  }

  checkGameStatus() {
    for (let i = 0; i < this.board.length; i++) {
      this.checkRow(i);
      this.checkColumn(i);
    }
  }
}

export default Game;
