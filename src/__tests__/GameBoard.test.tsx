import * as React from 'react';
import { shallow } from 'enzyme';
import GameBoard from '../components/GameBoard';
import { createBoard } from '../helperFunctions/boardCreation';

describe('GameBoard component', () => {
  it('should render a table', () => {
    const boardArray = createBoard(3, undefined);
    const wrapper = shallow(
      <GameBoard
        data={boardArray}
        handlePlayerInput={jest.fn()}
        reset={jest.fn()}
      />
    );
    expect(wrapper.find('table#game-table').exists()).toBe(true);
  });

  it('should render 25 squares given a 5x5 array', () => {
    const testBoard = Array(5)
      .fill(undefined)
      .map(() => Array(5).fill(undefined));

    const wrapper = shallow(
      <GameBoard
        data={testBoard}
        handlePlayerInput={jest.fn()}
        reset={jest.fn()}
      />
    );
    const squares = wrapper.find('.square');
    expect(squares).toHaveLength(25);
  });

  it('should render a grid containing player pieces', () => {
    const testBoard: Board = [
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['X', 'O', 'X'],
    ];
    const wrapper = shallow(
      <GameBoard
        data={testBoard}
        handlePlayerInput={jest.fn()}
        reset={jest.fn()}
      />
    );
    const squares = wrapper.find('.square');
    expect(squares).toHaveLength(9);
  });
});
