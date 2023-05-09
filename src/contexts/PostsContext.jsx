import { createContext, useContext, useEffect, useState } from "react";
import { createPost, editPost, getAllPosts } from "../services/postService";
import { removePost } from "../services/postService";

export const PostsContext = createContext();

export const usePostsContext = () => {
    return useContext(PostsContext);
};

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllPosts()
            .then(posts => {
                setPosts(posts.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
                setIsLoading(false); 
            });
    }, []);

    // Create new post 
    const onAddPostHandler = async (post) => {
        const newPost = await createPost(post.text, post.picture);
        setPosts(state => [newPost, ...state]);
    };
    // Delete post 
    const onDeleteHandler = async (postId) => {
        const { id } = await removePost(postId);
        setPosts(state => state.filter(x => x._id !== id));
    };
    // Edit post
    const onEditPostHandler = async (postId, data) => {
        const editedPost = await editPost(postId, data);
        setPosts(state => state.map(x => x._id == postId ? editedPost : x));
    };

    const contextValue = {
        onAddPostHandler,
        onDeleteHandler,
        onEditPostHandler,
        isLoading,
        setIsLoading,
        posts,
    };

    return (
        <PostsContext.Provider value={contextValue}>
            {children}
        </PostsContext.Provider>
    );
};
