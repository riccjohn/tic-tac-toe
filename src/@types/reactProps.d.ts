type BoardProps = {
  data: Board;
  handlePlayerInput: (coords: Coords) => void;
  reset: () => void;
  winner?: string;
};

type BoardFormProps = {
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  error: boolean;
};
