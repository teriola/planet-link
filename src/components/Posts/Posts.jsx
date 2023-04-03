import { useEffect, useState } from 'react';
import PostCard from '../PostCard';
import { getPostsByUser } from '../../services/postService';
import { useParams } from 'react-router-dom';
import Loading from '../ui/Loading';
import { useProfileContext } from '../../contexts/ProfileContext';

export default function Posts() {
  const [userPosts, setUserPosts] = useState([]);
  const { id } = useParams();
  const { isLoading } = useProfileContext();

  useEffect(() => {
    getPostsByUser(id).then(posts => setUserPosts(posts.sort((a, b) => b.likes - a.likes)));
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : userPosts?.length > 0 ? userPosts.map(post => <PostCard key={post._id} post={post} />) : 
      <h3 className="text-2xl text-center pt-4 dark:text-gray-400">No posts</h3>}
    </>
  );
};
