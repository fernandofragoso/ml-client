import { searchTerm, getItem } from './api';
import { itemMock, searchMock } from '../utils/mocks';

beforeEach(function() {
  fetch.resetMocks();
});

it('searchTerm is a function and returns a promise', async () => {
  fetch.mockResponse(JSON.stringify(searchMock));
  let json = await searchTerm('test');
  expect(typeof searchTerm).toBe('function');
  expect(json).toEqual(searchMock);
});

it('getItem is a function and returns a promise', async () => {
  fetch.mockResponse(JSON.stringify(itemMock));
  let json = await getItem('123');
  expect(typeof getItem).toBe('function');
  expect(json).toEqual(itemMock);
});