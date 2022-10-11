import { get, post } from './fetch.js';
 
const URL = 'http://localhost:3000/api/v1/shopping';

export async function getList() {
  return await get(URL);
}

export async function addItem(item) {
  return await post(URL, item);
}
