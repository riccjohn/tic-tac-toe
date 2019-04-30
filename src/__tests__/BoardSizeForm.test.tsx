import * as React from 'react';
import { shallow, mount } from 'enzyme';
import BoardSizeForm from '../components/BoardSizeForm';

describe('BoardSizeForm component', () => {
  it('Renders a form', () => {
    const wrapper = shallow(
      <BoardSizeForm
        handleChange={jest.fn()}
        handleSubmit={jest.fn()}
        hasError={false}
      />
    );
    expect(wrapper.exists('#size-form')).toBeTruthy();
  });

  it('Renders an error if given one', () => {
    const wrapper = mount(
      <BoardSizeForm
        handleChange={jest.fn()}
        handleSubmit={jest.fn()}
        hasError={true}
      />
    );
    expect(
      wrapper.contains(
        <p>Error: Invalid input. Please input a number from 3 - 10</p>
      )
    ).toBeTruthy();
  });

  it('Calls its handleChange method', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <BoardSizeForm
        handleChange={mockFn}
        handleSubmit={jest.fn()}
        hasError={false}
      />
    );
    expect(mockFn.mock.calls).toHaveLength(0);
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: '123' } });
    expect(mockFn.mock.calls).toHaveLength(1);
  });

  it('Calls its handleSubmit method', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <BoardSizeForm
        handleChange={jest.fn()}
        handleSubmit={mockFn}
        hasError={false}
      />
    );
    expect(mockFn.mock.calls).toHaveLength(0);
    wrapper.find('form').simulate('submit');
    expect(mockFn.mock.calls).toHaveLength(1);
  });
});
