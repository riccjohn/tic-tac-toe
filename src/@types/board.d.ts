type PlayerPiece = 'X' | 'O';
type Square = PlayerPiece | undefined;
type Row = Square[];
type Board = Row[];

type Coords = {
  row: number;
  col: number;
};

type WinningVector = Coords[];
