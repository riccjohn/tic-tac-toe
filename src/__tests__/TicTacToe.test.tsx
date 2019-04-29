import * as React from 'react';
import { shallow } from 'enzyme';
import TicTacToe from '../components/TicTacToe';

describe('TicTacToe component', () => {
  it('should render title', () => {
    const wrapper = shallow(<TicTacToe />);
    expect(wrapper.contains(<h1>Tic Tac Toe</h1>)).toEqual(true);
  });

  it('should render the BoardSizeForm component by default', () => {
    const wrapper = shallow(<TicTacToe />);
    expect(wrapper.find('BoardSizeForm').exists()).toBe(true);
  });
});
