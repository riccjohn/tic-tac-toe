import * as React from 'react';
import { shallow } from 'enzyme';
import GameBoard from '../components/GameBoard';
import Table from '../components/atoms/Table';
import Button from '../components/atoms/Button';
import BoardSquare from '../components/atoms/BoardSquare';
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
    expect(wrapper.find(Table).exists()).toBe(true);
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

  it('should call the handlePlayerInput function when a player clicks a cell', () => {
    const boardArray = createBoard(3, undefined);
    const mockFn = jest.fn();
    const wrapper = shallow(
      <GameBoard
        data={boardArray}
        handlePlayerInput={mockFn}
        reset={jest.fn()}
      />
    );
    expect(mockFn.mock.calls).toHaveLength(0);
    wrapper
      .find('.square')
      .at(0)
      .simulate('click');
    expect(mockFn.mock.calls).toHaveLength(1);
  });

  it('should call the reset function when a player clicks the reset button', () => {
    const boardArray = createBoard(3, undefined);
    const mockFn = jest.fn();
    const wrapper = shallow(
      <GameBoard
        data={boardArray}
        handlePlayerInput={jest.fn()}
        reset={mockFn}
      />
    );
    expect(mockFn.mock.calls).toHaveLength(0);
    wrapper.find(Button).simulate('click');
    expect(mockFn.mock.calls).toHaveLength(1);
  });

  it('should add a "winner" prop to cells that are part of a win', () => {
    const boardArray: Board = createBoard(3, undefined);
    const wrapper = shallow(
      <GameBoard
        data={boardArray}
        handlePlayerInput={jest.fn()}
        reset={jest.fn()}
        winningVector={[
          { row: 0, col: 0 },
          { row: 0, col: 1 },
          { row: 0, col: 2 },
        ]}
      />
    );

    const winnerProps = new Array(3).fill(undefined).map(
      (el, idx) =>
        wrapper
          .find(BoardSquare)
          .at(idx)
          .props().winner
    );

    expect(winnerProps.every(winner => !!winner)).toBeTruthy();
  });
});
