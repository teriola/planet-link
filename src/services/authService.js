import { post } from "./requester";

export async function login(formData) {
  const data = await post('/user/login', formData);
  return data;
};

export async function register(formData) {
  const data = await post('/user/register', formData);
  return data;
}