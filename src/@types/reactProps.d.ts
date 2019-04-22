type BoardProps = {
  data: Board;
  handlePlayerInput: (coords: Coords) => void;
  reset: () => void;
};
