import { get } from "./requester";

export async function getUserById(id) {
    const user = await get(`/users/${id}`);
    return user;
}