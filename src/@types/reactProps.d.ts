type BoardProps = {
  data: Board;
  handlePlayerInput: (coords: Coords) => void;
  reset: () => void;
  winner?: string;
  getValue: (square: Square) => Square;
};

type BoardFormProps = {
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  hasError?: boolean;
};
