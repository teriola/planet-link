import { useEffect, useState } from "react";
import PostCard from '../PostCard';
import { getPostsByUser, getAllPosts } from "../../services/postService";
import { useOutletContext } from "react-router";
import { deletePost } from "../../services/postService";
import { PostsContext } from "../../contexts/PostsContext";

export default function Posts({ isAllPosts }) {
  // Get needed posts and save them in state
  const [posts, setPosts] = useState([]);
  const id = useOutletContext();
  useEffect(() => {
    if (isAllPosts) getAllPosts().then(setPosts);
    else getPostsByUser(id).then(setPosts);
  }, [isAllPosts]);

  // Posts change handlers
  const onDeleteHandler = async (postId) => {
    const { id } = await deletePost(postId);
    setPosts(state => state.filter(x => x._id !== id));
  };
  const onAddPostHandler = async () => {
    setPosts(state => [...state, ])
  };
  const contextValue = {
    onDeleteHandler,
    onAddPostHandler,
    posts,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {
        posts.length > 0 ?
          posts.map(post => <PostCard key={post._id} post={post} />) :
          <h3 className="text-2xl text-center pt-4 dark:text-gray-400">No posts</h3>
      }
    </PostsContext.Provider>
  );
};
