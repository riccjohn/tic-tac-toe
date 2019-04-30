import * as React from 'react';
import { shallow, render, mount } from 'enzyme';
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

  it('will render the Error component if necessary', () => {
    const wrapper = mount(<TicTacToe />);
    expect(
      wrapper.contains(
        <p>Error: Invalid input. Please input a number from 3 - 10</p>
      )
    ).toBeFalsy();
    wrapper.setState({ hasError: true });
    expect(
      wrapper.contains(
        <p>Error: Invalid input. Please input a number from 3 - 10</p>
      )
    ).toBeTruthy();
  });
});
