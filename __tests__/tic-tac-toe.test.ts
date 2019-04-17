import Game from '../src/tic-tac-toe';

describe('Tic-tac-toe', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('will generate an empty board that is 3x3 by default', () => {
    const board = Array(3)
      .fill(undefined)
      .map(() => Array(3).fill(undefined));

    expect(game.board).toEqual(board);
  });

  it('will generate a 5x5 board given the correct arguments', () => {
    const board = Array(5)
      .fill(undefined)
      .map(() => Array(5).fill(undefined));

    const newGame = new Game(5);
    expect(newGame.board).toEqual(board);
  });

  it('will mark the board when a user chooses a space', () => {
    game.place(0, 0);
    expect(game.board[0][0]).toEqual('X');
  });

  it('switches players every turn', () => {
    game.place(0, 0);
    expect(game.board[0][0]).toEqual('X');
    game.place(0, 1);
    expect(game.board[0][1]).toEqual('O');
  });

  it('will not overwrite a marker where one already exists', () => {
    game.place(0, 0);
    game.place(0, 0);
    expect(game.board[0][0]).toBe('X');
  });

  it("will detect a win when there are 3 X's in a row", () => {
    game.place(0, 0); // X
    game.place(2, 0); // O
    game.place(0, 1); // X
    game.place(2, 1); // O
    game.place(0, 2); // X
    expect(game.winner).toEqual('X');
  });

  it("will detect a win when there are 3 X's in a column", () => {
    game.place(0, 0); // X
    game.place(0, 2); // O
    game.place(1, 0); // X
    game.place(0, 1); // O
    game.place(2, 0); // X
    expect(game.winner).toEqual('X');
  });

  it("will detect a win when there are 3 X's diagonally left to right", () => {
    game.place(0, 0); // X
    game.place(0, 2); // O
    game.place(1, 1); // X
    game.place(1, 0); // O
    game.place(2, 2); // X
    expect(game.winner).toEqual('X');
  });

  it("will detect a win when there are 3 X's diagonally right to left", () => {
    game.place(0, 2);
    game.place(0, 0);
    game.place(1, 1);
    game.place(0, 1);
    game.place(2, 0);
    expect(game.winner).toEqual('X');
  });
});