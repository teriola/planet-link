import { get, post } from "./requester";

export const login = (email, password) => post('/users/login', { email, password });

export const register = ({ email, password, repeatPassword, name, surname }) => post('/users/register', { email, password, repeatPassword, name, surname });

export const logout = () => get ('/users/logout');
