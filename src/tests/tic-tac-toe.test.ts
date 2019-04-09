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

  it("places an X on the board on X's t urn", () => {
    game.place(0, 0);
    expect(game.board[0][0]).toEqual("X");
  });

  it("switches players every turn", () => {
    game.place(0, 0);
    game.place(0, 1);
    expect(game.board[0][1]).toEqual("O");
  });

  it("will not overwrite a marker where one already exists", () => {
    game.place(0, 0);
    game.place(0, 0);
    expect(game.board[0][0]).toBe("X");
  });

  it("will end the game when there are 3 X's in a row", () => {
    game.place(0, 0); // X
    game.place(2, 0); // O
    game.place(0, 1); // X
    game.place(2, 1); // O
    game.place(0, 2); // X
    expect(game.winner).toEqual("X");
  });

  it("will end the game when there are 3 X's in a column", () => {
    game.place(0, 0);
    game.place(0, 2);
    game.place(1, 0);
    game.place(0, 1);
    game.place(2, 0);
    expect(game.winner).toEqual("X");
  });
});
