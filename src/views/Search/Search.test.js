import React from 'react';
import { shallow, mount } from 'enzyme';
import { searchMock } from '../../utils/mocks';
import Search from './Search';
import SearchItem from '../../components/SearchItem/SearchItem';

beforeEach(function() {
  global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve(searchMock);
      });
  });
});

it('renders without crashing', () => {
  const location = { search: '?search=iphone' };
  shallow(<Search location={location} />);
});

it('render four items', async () => {
  const location = { search: '?search=iphone' };
  const wrapper = await mount(<Search location={location} />);
  wrapper.update();
  expect(wrapper.find(SearchItem).length).toBe(4);
});
