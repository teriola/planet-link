import { createContext, useContext, useEffect, useState } from "react";
import { createPost, getAllPosts } from "../services/postService";
import { deletePost } from "../services/postService";

export const PostsContext = createContext();

export const usePostsContext = () => {
  return useContext(PostsContext);
};

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPosts()
      .then(posts => {
      setPosts(posts.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
    });
  }, []);

  // Create new post 
  const onAddPostHandler = async (post) => {
    const newPost = await createPost(post.text, post.picture);
    setPosts(state => [newPost, ...state]);
  };
  // Delete post 
  const onDeleteHandler = async (postId) => {
    const { id } = await deletePost(postId);
    setPosts(state => state.filter(x => x._id !== id));
  };

  const contextValue = {
    onAddPostHandler,
    onDeleteHandler,
    posts,
  };
  
  return(
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};
