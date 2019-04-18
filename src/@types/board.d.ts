type PlayerPiece = 'X' | 'O';
type Square = PlayerPiece | undefined;
type Row = Square[];
type Board = Row[];

interface IBoardProps {
  data?: Board;
  handlePlayerInput?: any;
}

interface ICoords {
  row: number;
  col: number;
}
