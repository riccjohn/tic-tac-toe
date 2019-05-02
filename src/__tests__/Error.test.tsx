import * as React from 'react';
import { shallow } from 'enzyme';
import Error from '../components/Error';

describe('Error component', () => {
  it('should render an error message', () => {
    const wrapper = shallow(<Error />);
    expect(
      wrapper.contains(
        <p>Error: Invalid input. Please input a number from 3 - 10</p>
      )
    ).toBeTruthy();
  });
});
