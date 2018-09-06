const BASE_URL = 'http://localhost';
const PORT = '3001';
const URL = `${BASE_URL}:${PORT}`;
const SEARCH_ITEMS = '/api/items?q=';
const GET_ITEM = '/api/items'

export const searchTerm = (term) => {
  // console.log('oi' + URL + SEARCH_ITEMS + 'q=' + term);
  return fetch(`${URL}${SEARCH_ITEMS}${term}`).then(res => res.json());
}

export const getItem = async (id) => {
  return fetch(`${URL}${GET_ITEM}/${id}`);
}