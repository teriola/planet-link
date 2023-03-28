import { get, patch } from "./requester";

export async function getUserById(id) {
    const user = await get(`/users/${id}`);
    return user;
}
export async function getUserFriends(userId) {
    const friends = await get(`/users/${userId}/friends`);
    return friends;
}
export async function patchUser(userId, data){
    const newData = await patch(`/users/${userId}`, data);
    return newData;
}
