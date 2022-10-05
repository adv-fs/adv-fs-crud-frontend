import { get, post, put, patch, del } from './fetch.js';

const URL = '/api/v1/auth';

export async function signUp(credentials) {
  const response = await post(`${URL}/signup`, credentials);
  response.user = response.data;
  return response;
}
