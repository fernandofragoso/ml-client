import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from './SearchBar';

it('renders without crashing', () => {
  shallow(<SearchBar />);
});

it('shows logo, input and button', () => {
  const wrapper = shallow(<SearchBar />);
  expect(wrapper.find('.SearchBar__logo').length).toBe(1);
  expect(wrapper.find('button').length).toBe(1);
  expect(wrapper.find('input').length).toBe(1);
});

it('enables the search button when text is inserted', () => {
  const wrapper = mount(<SearchBar />);
  expect(wrapper.find('button').props().disabled).toBe(true);
  wrapper.setState({ value: 'test' });
  wrapper.update();
  expect(wrapper.find('button').props().disabled).toBe(false);
});

it('clears field on logo click', () => {
  const wrapper = shallow(<SearchBar />);
  wrapper.setState({ value: 'test' });
  expect(wrapper.find('input').props().value).toEqual('test');
  wrapper.find('.SearchBar__logo img').simulate('click');
  wrapper.update();
  expect(wrapper.find('input').props().value).toEqual('');
});