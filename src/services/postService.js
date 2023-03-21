import { post, get } from "./requester";

export async function createPost(text, picture, ownerId) {
    const Post = await post('/posts', { text, picture, ownerId });
    return Post;
}

export async function getAllPosts() {
    const posts = await get('/posts');
    return posts;
}

export async function getPostsByUser(userId) {
    console.log(userId);
    const posts = await get(`/posts/user/${userId}`);
    console.log(posts);
    return posts;
}