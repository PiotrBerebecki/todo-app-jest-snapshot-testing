import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import toJson from 'enzyme-to-json';

describe('List', () => {
  it('should snapshot list', () => {
    const items = ['first', 'second', '3'];
    const wrapper = shallow(<List items={items} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should test items props as undefined', () => {
    const wrapper = shallow(<List />);
  });

  it('should render the right text', () => {
    const items = ['Hello world'];
    const wrapper = shallow(<List items={items} />);

    expect(wrapper.find('li').first().text()).toBe(items[0]);
  });
});
