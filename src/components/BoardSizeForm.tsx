import * as React from 'react';
import { Error } from './index';

type BoardFormProps = {
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  error: boolean;
};

const BoardSizeForm: React.SFC<BoardFormProps> = props => {
  const { handleChange, handleSubmit, error } = props;
  return (
    <React.Fragment>
      <p>What size should the board be?</p>
      <form onSubmit={handleSubmit}>
        Board Size:
        <input onChange={handleChange} type='text' name='size' />
        <input type='submit' value='submit' />
      </form>
      {error && <Error />}
    </React.Fragment>
  );
};

export default BoardSizeForm;
