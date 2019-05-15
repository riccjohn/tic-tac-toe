import * as React from 'react';
import { shallow, mount } from 'enzyme';
import BoardSizeForm from '../components/BoardSizeForm';

describe('BoardSizeForm component', () => {
  it('renders a form', () => {
    const wrapper = shallow(<BoardSizeForm onSubmit={jest.fn()} />);
    expect(wrapper.exists('.size-form')).toBeTruthy();
  });

  it('renders an error if given one', () => {
    const wrapper = mount(
      <BoardSizeForm onSubmit={jest.fn()} hasError={true} />
    );
    expect(
      wrapper.contains(
        <p>Error: Invalid input. Please input a number from 3 - 10</p>
      )
    ).toBeTruthy();
  });

  it('calls its onChange method', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <BoardSizeForm onSubmit={jest.fn()} onChange={mockFn} />
    );
    expect(mockFn.mock.calls).toHaveLength(0);
    wrapper.find("form StyledInput[name='size']").simulate('change');
    expect(mockFn.mock.calls).toHaveLength(1);
  });

  it('calls its onSubmit method', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<BoardSizeForm onSubmit={mockFn} />);
    expect(mockFn.mock.calls).toHaveLength(0);
    wrapper.find('form').simulate('submit');
    expect(mockFn.mock.calls).toHaveLength(1);
  });
});
