import { get, post } from "./requester";

export async function login(email, password) {
  const data = await post('/users/login', { email, password });
  return data;
};

export async function register({ email, password, rePassword, name, surname }) {
  const data = await post('/users', { email, password, rePassword, name, surname });
  return data;
}

export async function logout() {
  get('/users/logout');
}
