import * as React from 'react';
import { shallow } from 'enzyme';
import GameBoard from '../components/GameBoard';
import { PlayerPiece } from '../PlayerPiece';

describe('GameBoard component', () => {
  it('should render a table', () => {
    const wrapper = shallow(<GameBoard />);
    expect(wrapper.find('table#game-table').exists()).toBe(true);
  });

  it('should render a 9 squares by default', () => {
    const wrapper = shallow(<GameBoard />);
    const squares = wrapper.find('td');
    expect(squares).toHaveLength(9);
  });

  it('should render 25 squares given a 5x5 array', () => {
    const testBoard = [
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
    ];

    const wrapper = shallow(<GameBoard board={testBoard} />);
    const squares = wrapper.find('.square');
    expect(squares).toHaveLength(25);
  });

  it('should render a grid containing player pieces', () => {
    const testBoard = [
      [PlayerPiece.X, PlayerPiece.O, PlayerPiece.X],
      [PlayerPiece.O, PlayerPiece.X, PlayerPiece.O],
      [PlayerPiece.X, PlayerPiece.O, PlayerPiece.X],
    ];
    const wrapper = shallow(<GameBoard board={testBoard} />);
    const squares = wrapper.find('.square');
    expect(squares).toHaveLength(9);
  });
});
