const BASE_URL = 'http://localhost';
const PORT = '3001';
const URL = `${BASE_URL}:${PORT}`;
const SEARCH_ITEMS = '/api/items?q=';
const GET_ITEM = '/api/items'

export const searchTerm = async (term) => {
  return fetch(`${URL}${SEARCH_ITEMS}${term}`);
}

export const getItem = async (id) => {
  return fetch(`${URL}${GET_ITEM}/${id}`);
}