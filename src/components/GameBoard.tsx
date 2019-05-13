import * as React from 'react';
import { Button } from './atoms/Button';
import { Square, Table } from './atoms/TableElements';
import { ContentContainer } from './atoms/LayoutContainers';
import { Title } from './atoms/Title';

const GameBoard: React.SFC<BoardProps> = props => {
  const { data, handlePlayerInput, reset, winner } = props;

  return data ? (
    <ContentContainer>
      {winner && <Title>{`Winner is ${winner}`}</Title>}
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
    </ContentContainer>
  ) : (
    <h1>NO_BOARD</h1>
  );
};

export default GameBoard;
