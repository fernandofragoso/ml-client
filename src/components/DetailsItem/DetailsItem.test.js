import React from 'react';
import { shallow } from 'enzyme';
import { itemMock } from '../../utils/mocks';
import DetailsItem from './DetailsItem';

const item = itemMock;
const onClick = jest.fn();

it('renders without crashing', () => {
  shallow(<DetailsItem {...item} {...item.price}/>);
});

it('shows picture, title, price and description', () => {
  item.description = "Teste";
  const wrapper = shallow(<DetailsItem {...item} {...item.price}/>);
  expect(wrapper.find('.DetailsItem__picture').length).toBe(1);
  expect(wrapper.find('.DetailsItem__title').length).toBe(1);
  expect(wrapper.find('.DetailsItem__price').length).toBe(1);
  expect(wrapper.find('.DetailsItem__description').length).toBe(1);
});

it('hides description if is empty', () => {
  item.description = "";
  const wrapper = shallow(<DetailsItem {...item} {...item.price}/>);
  expect(wrapper.find('.DetailsItem__picture').length).toBe(1);
  expect(wrapper.find('.DetailsItem__title').length).toBe(1);
  expect(wrapper.find('.DetailsItem__price').length).toBe(1);
  expect(wrapper.find('.DetailsItem__description').length).toBe(0);
});