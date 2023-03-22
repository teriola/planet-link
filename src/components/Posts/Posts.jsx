import { useEffect, useState } from "react";
import PostCard from '../PostCard';
import { getPostsByUser, getAllPosts } from "../../services/postService";
import { useOutletContext } from "react-router";

export default function Posts({ isAllPosts }) {
  const [posts, setPosts] = useState([]);
  const id = useOutletContext();

  useEffect(() => {
    if (isAllPosts) getAllPosts().then(setPosts);
    else getPostsByUser(id).then(setPosts);
  }, [isAllPosts]);

  return (
    <div>
      {posts.length > 0 ?
        posts.map(post => <PostCard key={post._id} post={post} />) :
        <h3 className="text-2xl text-center pt-4">No posts</h3>
      }
    </div>
  );
};
