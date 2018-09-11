import React from 'react';
import { shallow } from 'enzyme';
import { searchMock } from '../../utils/mocks';
import Search from './Search';
import SearchItem from '../../components/SearchItem/SearchItem';

beforeEach(function() {
  fetch.resetMocks();
});

it('renders without crashing', () => {
  fetch.mockResponse(JSON.stringify(searchMock));
  const location = { search: '?search=iphone' };
  shallow(<Search location={location} />);
});

it('render four items and categories', (done) => {
  fetch.mockResponse(JSON.stringify(searchMock));

  const location = { search: '?search=iphone' };
  const wrapper = shallow(<Search location={location} />);

  setImmediate(() => {
    expect(wrapper.find(SearchItem).length).toBe(4);
    expect(wrapper.state().categories.length).toBeGreaterThan(0);
    done();
  });
});