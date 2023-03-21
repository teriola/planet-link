import { get } from "./requester";

export async function getUserById(id) {
    const user = await get(`/users/${id}`);
    return user;
}

export async function getUserFriends(userId) {
    const friends = await get(`/users/${userId}/friends`);
    return friends;
}