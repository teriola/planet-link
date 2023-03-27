import { useEffect, useState } from 'react';
import PostCard from '../PostCard';
import { getPostsByUser } from '../../services/postService';
import { useParams } from 'react-router-dom';

export default function Posts() {
  const [userPosts, setUserPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPostsByUser(id).then(posts => setUserPosts(posts.sort((a, b) => b.likes - a.likes)));
  }, []);

  return (
    <>
      {userPosts?.length > 0 ? userPosts.map(post => <PostCard key={post._id} post={post} />) : 
      <h3 className="text-2xl text-center pt-4 dark:text-gray-400">No posts</h3>}
    </>
  );
};
