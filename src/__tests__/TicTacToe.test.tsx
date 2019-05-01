import * as React from 'react';
import { shallow, mount } from 'enzyme';
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

  it('will render the Board component if given invalid input', () => {
    const wrapper = mount(<TicTacToe />);
    const input = wrapper.find('input').at(0);

    (input.instance() as React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >).value = '3';
    input.simulate('change');
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('#board')).toHaveLength(1);
  });
});
