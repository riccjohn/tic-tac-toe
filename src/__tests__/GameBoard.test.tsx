import * as React from 'react';
import { shallow } from 'enzyme';
import GameBoard from '../components/GameBoard';

describe('GameBoard component', () => {
  it('should render without throwing an error', () => {
    const board = shallow(<GameBoard />);
    expect(board.find('form').exists()).toBe(true);
  });
});
