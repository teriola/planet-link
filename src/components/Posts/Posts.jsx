import { useEffect, useState } from "react";
import PostCard from '../PostCard';
import { getPostsByUser, getAllPosts } from "../../services/postService";
import { useOutletContext } from "react-router";
import { PostsProvider } from "../../contexts/PostsContext";

export default function Posts({ isAllPosts }) {
  const [posts, setPosts] = useState([]);
  const id = useOutletContext();

  useEffect(() => {
    if (isAllPosts) getAllPosts().then(setPosts);
    else getPostsByUser(id).then(setPosts);
  }, [isAllPosts]);

  return (
    <PostsProvider>
      {posts.length > 0 ?
        posts.map(post => <PostCard key={post._id} post={post} />) :
        <h3 className="text-2xl text-center pt-4 dark:text-gray-400">No posts</h3>
      }
    </PostsProvider>
  );
};
