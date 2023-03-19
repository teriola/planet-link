import { post } from "./requester";

export async function login(email, password) {
  const data = await post('/users/login', {email,password});
  return data;
};

export async function register(formData) {
  const data = await post('/users/register', formData);
  return data;
}