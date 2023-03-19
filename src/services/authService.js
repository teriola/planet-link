import { post } from "./requester";

export async function login(email, password) {
  const data = await post('/users/login', { email, password });
  return data;
};

export async function register({ email, password, firstName, lastName }) {
  const data = await post('/users/register', { email, password, firstName, lastName });
  return data;
}