import { get, patch, post } from "./requester";

export const getUserById = (userId) => get(`/users/${userId}`);

export const getUserFollowers = (userId) => get(`/users/${userId}/followers`);

export const followUser = (userId) => post(`/users/${userId}/follow`);

export const patchUser = (userId, data) => patch(`/users/${userId}`, data);