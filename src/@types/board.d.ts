type PlayerPiece = 'X' | 'O';
type Square = PlayerPiece | undefined;
type Row = Square[];
type Board = Row[];

type Vectors = number[][];

type Coords = {
  row: number;
  col: number;
};
