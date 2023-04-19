import { get, post } from "./requester";

export const login = (email, password) => post('/auth/login', { email, password });

export const register = ({ email, password, rePassword, name, surname }) => post('/auth/register', { email, password, rePassword, name, surname });

export const logout = () => get ('/auth/logout');