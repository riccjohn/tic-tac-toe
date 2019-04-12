enum PlayerPiece {
  X = 'X',
  O = 'O',
}

export type Square = PlayerPiece | undefined;
export type Row = Square[];
export type Board = Row[];
