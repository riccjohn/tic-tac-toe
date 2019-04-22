import * as React from 'react';
import { Error } from './index';

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
