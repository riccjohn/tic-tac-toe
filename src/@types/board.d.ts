declare enum PlayerPiece {
  X = 'X',
  O = 'O',
}

type Square = PlayerPiece | undefined;
type Row = Square[];
type Board = Row[];
