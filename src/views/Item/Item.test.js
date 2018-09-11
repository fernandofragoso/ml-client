import React from 'react';
import { shallow } from 'enzyme';
import { itemMock } from '../../utils/mocks';
import Item from './Item';
import DetailsItem from '../../components/DetailsItem/DetailsItem';

beforeEach(function() {
  fetch.resetMocks();
});

it('renders without crashing', () => {
  fetch.mockResponse(JSON.stringify(itemMock));
  const match = { params: { id: '123' } };
  shallow(<Item match={match} />);
});

it('render item details', (done) => {
  fetch.mockResponse(JSON.stringify(itemMock));

  const match = { params: { id: '123' } };
  const wrapper = shallow(<Item match={match} />);

  setImmediate(() => {
    expect(wrapper.find(DetailsItem).length).toBe(1);
    done();
  });
});