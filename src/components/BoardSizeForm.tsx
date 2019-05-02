import * as React from 'react';
import Error from './Error';

const BoardSizeForm: React.SFC<BoardFormProps> = props => {
  const { handleChange, handleSubmit, hasError } = props;
  return (
    <React.Fragment>
      <p>What size should the board be?</p>
      <form className='size-form' onSubmit={handleSubmit}>
        Board Size:
        <input
          onChange={handleChange}
          type='text'
          name='size'
          aria-label='board size input'
        />
        <input className='size-submit' type='submit' value='submit' />
      </form>
      {hasError && <Error />}
    </React.Fragment>
  );
};

BoardSizeForm.defaultProps = {
  handleChange: () => {},
  hasError: false,
};

export default BoardSizeForm;
