import React from 'react';
import { shallow, mount } from 'enzyme';
import { searchMock } from '../../utils/mocks';
import Search from './Search';
import SearchItem from '../../components/SearchItem/SearchItem';

beforeEach(function() {
  fetch.resetMocks();
});

// it('renders without crashing', () => {
//   fetch.mockResponse(JSON.stringify(searchMock));

//   const location = { search: '?search=iphone' };

//   shallow(<Search location={location} />);
// });

it('render four items', async () => {
  await fetch.mockResponse(JSON.stringify(searchMock));

  const location = { search: '?search=iphone' };
  const wrapper = await shallow(<Search location={location} />);
  // await wrapper.instance().componentDidUpdate();
  // await wrapper.state().categories;
  // await wrapper.instance().componentWillMount();


  // await wrapper.update();
});