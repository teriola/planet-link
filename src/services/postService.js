import { post, get, remove, put } from "./requester";

// GET
export const getAllPosts = () => get('/posts');
export const getUserPosts = (userId) => get(`/posts/user/${userId}`);
export const getUserBookmarks = () => get(`/posts/bookmarks`);
export const getPostComments = (postId) => get(`/posts/${postId}/comments`);

// POST
export const createPost = (message, image) => post('/posts', { message, image});
export const setBookmark = (postId) => post(`/posts/${postId}/bookmark`);
export const likePost = (postId) => post(`/posts/${postId}/like`);
export const postComment = (postId, data) => post(`/posts/${postId}/comment`, data);

// DELETE
export const removeBookmark = (postId) => remove(`/posts/${postId}bookmark`);
export const removePost = (postId) => remove(`/posts/${postId}`);
export const unlikePost = (postId) => remove(`/posts/${postId}/unlike`);


// NEEDS FIX
export const editPost = (postId, data) => put(`/posts/${postId}`, data);
