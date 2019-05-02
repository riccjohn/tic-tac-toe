import * as React from 'react';
import Error from './Error';

const BoardSizeForm: React.SFC<BoardFormProps> = props => {
  const { handleChange, handleSubmit, hasError } = props;
  return (
    <React.Fragment>
      <p>What size should the board be?</p>
      <form id='size-form' onSubmit={handleSubmit}>
        Board Size:
        <input
          id='size-input'
          onChange={handleChange}
          type='text'
          name='size'
        />
        <input id='size-submit' type='submit' value='submit' />
      </form>
      {hasError && <Error />}
    </React.Fragment>
  );
};

export default BoardSizeForm;
