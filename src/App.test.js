import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import List from './List';

describe('App', () => {
  let wrapper, form;
  beforeEach(() => {
    wrapper = shallow(<App />);
    form = wrapper.find('form');
  });

  it('should add an item on submit', () => {
    expect(wrapper.find(List).props().items.length).toEqual(0);
    form.simulate('submit', {preventDefault: jest.fn()});
    expect(wrapper.find(List).props().items.length).toEqual(1);
  });

  it('should add two items on submit', () => {
    form.simulate('submit', {preventDefault: jest.fn()});
    form.simulate('submit', {preventDefault: jest.fn()});
    expect(wrapper.find(List).props().items.length).toEqual(2);
  });

  it('should mock preventDefault', () => {
    const mockPreventDefault = jest.fn();
    form.simulate('submit', {preventDefault: mockPreventDefault});
    expect(mockPreventDefault).toHaveBeenCalledTimes(1);
  });

  it('should add a ref to state on change', () => {
    const value = 'Hello world';
    const input = wrapper.find('input');

    input.simulate('change', {target: {value}});
    form.simulate('submit', {preventDefault: jest.fn()});

    expect(wrapper.find(List).props().items[0]).toBe(value);
  });
});
