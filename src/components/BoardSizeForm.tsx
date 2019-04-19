import * as React from 'react';

type BoardFormProps = {
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const BoardSizeForm: React.SFC<BoardFormProps> = props => {
  const { handleChange, handleSubmit } = props;
  return (
    <React.Fragment>
      <p>What size should the board be?</p>
      <form onSubmit={handleSubmit}>
        Board Size:
        <input onChange={handleChange} type='text' name='size' />
        <input type='submit' value='submit' />
      </form>
    </React.Fragment>
  );
};

export default BoardSizeForm;
