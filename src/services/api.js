import { API_URL, API_PORT } from '../config';

const BASE_URL = API_URL;
const PORT = API_PORT;
const URL = (PORT) ? `${BASE_URL}:${PORT}` : BASE_URL;
const SEARCH_ITEMS = '/api/items?q=';
const GET_ITEM = '/api/items'

export const searchTerm = async (term) => {
  return fetch(`${URL}${SEARCH_ITEMS}${term}`).then(res => res.json());
}

export const getItem = async (id) => {
  return fetch(`${URL}${GET_ITEM}/${id}`).then(res => res.json());
}