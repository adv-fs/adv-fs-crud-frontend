import { get, post } from './fetch.js';
 
const URL = 'https://adv-fs-brien.herokuapp.com/api/v1/shopping';

export async function getList() {
  return await get(URL);
}

export async function addItem(item) {
  return await post(URL, item);
}
