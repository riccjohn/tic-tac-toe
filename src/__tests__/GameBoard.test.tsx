import * as React from 'react';
import { shallow } from 'enzyme';
import GameBoard from '../components/GameBoard';

describe('GameBoard component', () => {
  it('should render a table', () => {
    const boardArray = Array(3)
      .fill(undefined)
      .map(() => Array(3).fill(undefined));
    const wrapper = shallow(<GameBoard data={boardArray} />);
    expect(wrapper.find('table#game-table').exists()).toBe(true);
  });

  it('should render 25 squares given a 5x5 array', () => {
    const testBoard = Array(5)
      .fill(undefined)
      .map(() => Array(5).fill(undefined));

    const wrapper = shallow(<GameBoard data={testBoard} />);
    const squares = wrapper.find('.square');
    expect(squares).toHaveLength(25);
  });

  it('should render a grid containing player pieces', () => {
    const testBoard: Board = [
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['X', 'O', 'X'],
    ];
    const wrapper = shallow(<GameBoard data={testBoard} />);
    const squares = wrapper.find('.square');
    expect(squares).toHaveLength(9);
  });
});
