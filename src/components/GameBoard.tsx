import * as React from 'react';
import { Button } from './atoms/Button';
import { Square, Table } from './atoms/TableElements';

const GameBoard: React.SFC<BoardProps> = props => {
  const { data, handlePlayerInput, reset, winner } = props;

  return data ? (
    <div id='board' className='center column'>
      {winner && <h1>{`Winner is ${winner}`}</h1>}
      <Table id='game-table'>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className='row'>
              {row.map((square, columnIndex) => (
                <Square
                  key={columnIndex}
                  className='square'
                  onClick={() =>
                    handlePlayerInput({ row: rowIndex, col: columnIndex })
                  }
                >
                  {square || '•'}
                </Square>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className='reset' onClick={reset}>
        Reset
      </Button>
    </div>
  ) : (
    <h1>NO_BOARD</h1>
  );
};

export default GameBoard;
