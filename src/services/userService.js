import { get, patch, post } from "./requester";

export async function getUserById(id) {
    const user = await get(`/users/${id}`);
    return user;
}
export async function getUserFollowers(userId) {
    const followers = await get(`/users/${userId}/followers`);
    return followers;
}
export async function followUser(userId){
    const user = await post(`/users/${userId}/follow`);
    return user;
}
export async function patchUser(userId, data){
    const newData = await patch(`/users/${userId}`, data);
    return newData;
}
