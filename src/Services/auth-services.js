import { get, post, del } from './fetch.js';

const URL = '/api/v1/auth';

export async function signUp(credentials) {
  const response = await post(`${URL}/signup`, credentials);
  response.user = response.data;
  return response;
}

export async function signIn(credentials) {
  const response = await post(`${URL}/signin`, credentials);
  response.user = response.data;
  return response;
}

export async function signOut() {
  const response = await del(`${URL}/signout`);
  return response;
}

export async function verifyUser() {
  const response = await get(`${URL}/verify`);
  response.user = response.data;
  return response;
}

// local storing for users, not needed at this time
