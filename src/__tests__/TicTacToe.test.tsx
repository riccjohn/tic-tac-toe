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

  it('will render the Error component if given invalid input', () => {
    const wrapper = mount(<TicTacToe />);
    const input = wrapper.find('input').at(0);

    (input.instance() as React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >).value = '1';

    input.simulate('change');
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('#board')).toHaveLength(0);
    expect(
      wrapper.contains(
        <p>Error: Invalid input. Please input a number from 3 - 10</p>
      )
    ).toBeTruthy();
  });

  it('will render a 4x4 game board given an input of 4', () => {
    const wrapper = mount(<TicTacToe />);
    const input = wrapper.find('input').at(0);

    (input.instance() as React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >).value = '4';

    input.simulate('change');
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('td')).toHaveLength(16);
  });

  it('will render a 3x3 game board by default', () => {
    const wrapper = mount(<TicTacToe />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('td')).toHaveLength(9);
  });

  it('will place an X on the board', () => {
    const wrapper = mount(<TicTacToe />);
    wrapper.find('form').simulate('submit');

    wrapper
      .find('td')
      .first()
      .simulate('click');

    expect(
      wrapper
        .render()
        .find('td')
        .first()
        .text()
    ).toEqual('X');
  });

  it('will allow you to reset the game board', () => {
    const wrapper = mount(<TicTacToe />);
    const input = wrapper.find('input').at(0);

    (input.instance() as React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >).value = '4';

    input.simulate('change');
    wrapper.find('form').simulate('submit');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('#size-form')).toHaveLength(1);
  });
});
