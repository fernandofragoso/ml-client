import React from 'react';
import { shallow } from 'enzyme';
import { searchItemMock } from '../../utils/mocks';
import SearchItem from './SearchItem';

const item = searchItemMock;
const onClick = jest.fn();

it('renders without crashing', () => {
  shallow(<SearchItem {...item} {...item.price}/>);
});

it('shows picture, price and description', () => {
  const wrapper = shallow(<SearchItem {...item} {...item.price}/>);
  expect(wrapper.find('.SearchItem__thumb').length).toBe(1);
  expect(wrapper.find('.SearchItem__price').length).toBe(1);
  expect(wrapper.find('.SearchItem__item').length).toBe(1);
});

it('calls onClick on item click', () => {
  const wrapper = shallow(<SearchItem onClick={onClick} {...item} {...item.price}/>);
  wrapper.find('.SearchItem').simulate('click');
  expect(onClick).toHaveBeenCalledTimes(1);
});