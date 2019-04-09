import Game from "../tic-tac-toe";

describe("Tic-tac-toe", () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });
  it("starts with an empty board", () => {
    const board = [["", "", ""], ["", "", ""], ["", "", ""]];
    expect(game.board).toEqual(board);
  });
  it("places an X on the board on X's turn", () => {
    game.place(0, 0);
    expect(game.board[0][0]).toEqual("X");
  });
  it("switches players every turn", () => {
    game.place(0, 0);
    game.place(0, 1);
    expect(game.board[0][1]).toEqual("O");
  });
});
