import * as React from 'react';
import { Input } from './atoms/Input';
import Error from './Error';

const BoardSizeForm: React.SFC<BoardFormProps> = props => {
  const { onChange, onSubmit, hasError } = props;

  return (
    <React.Fragment>
      <p>What size should the board be?</p>
      <form className='size-form' onSubmit={onSubmit}>
        <Input
          placeholder='board size'
          onChange={onChange}
          type='text'
          name='size'
          aria-label='board size input'
        />
        <Input submit className='size-submit' type='submit' value='submit' />
      </form>
      {hasError && <Error />}
    </React.Fragment>
  );
};

BoardSizeForm.defaultProps = {
  hasError: false,
  onChange: () => {},
};

export default BoardSizeForm;
