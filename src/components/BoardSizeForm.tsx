import * as React from 'react';
import Error from './Error';

const BoardSizeForm: React.SFC<BoardFormProps> = props => {
  const { handleChange, handleSubmit, error } = props;
  return (
    <React.Fragment>
      <p>What size should the board be?</p>
      <form id='size-form' onSubmit={handleSubmit}>
        Board Size:
        <input onChange={handleChange} type='text' name='size' />
        <input id='size-submit' type='submit' value='submit' />
      </form>
      {error && <Error />}
    </React.Fragment>
  );
};

export default BoardSizeForm;
