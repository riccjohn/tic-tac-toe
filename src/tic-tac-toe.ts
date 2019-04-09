type Square = string;
type Row = Square[];
type Board = Row[];

class Game {
  public board: Board;
  private currentPlayer: string;
  constructor() {
    this.currentPlayer = "X";
    this.board = [["", "", ""], ["", "", ""], ["", "", ""]];
  }

  switchPlayers() {
    if (this.currentPlayer === "X") this.currentPlayer = "O";
    else this.currentPlayer = "X";
  }

  place(x: number, y: number) {
    this.board[x][y] = this.currentPlayer;
    this.switchPlayers();
  }
}

export default Game;
