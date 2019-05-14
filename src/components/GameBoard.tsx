import * as React from 'react';
import Button from './atoms/Button';
import Square from './atoms/Square';
import Table from './atoms/Table';
import ContentContainer from './atoms/ContentContainer';
import Title from './atoms/Title';
import { containsCoordinates } from '../helperFunctions/contains';

function GameBoard(props: BoardProps) {
  const {
    data,
    handlePlayerInput,
    reset,
    getValue,
    winningVector,
    winner,
  } = props;

  return data ? (
    <ContentContainer>
      {winner && <Title>{`Winner is ${winner}`}</Title>}
      <Table id='game-table'>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className='row'>
              {row.map((square, columnIndex) => (
                <Square
                  winner={containsCoordinates(winningVector, {
                    col: columnIndex,
                    row: rowIndex,
                  })}
                  key={columnIndex}
                  className='square'
                  onClick={() =>
                    handlePlayerInput({ row: rowIndex, col: columnIndex })
                  }
                >
                  {getValue(square) || '•'}
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
}

GameBoard.defaultProps = {
  getValue: (square: Square) => square,
};

export default GameBoard;
