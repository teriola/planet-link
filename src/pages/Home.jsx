import PostFormCard from "../components/Forms/PostFormCard";
import PostCard from "../components/PostCard";
import { useAuthContext } from "../contexts/AuthContext";
import { usePostsContext } from "../contexts/PostsContext";

export default function Home() {
  const { user } = useAuthContext();
  const { posts } = usePostsContext();

  return (
    <>
      {user.accessToken ? <PostFormCard  /> : null}
      {posts?.length > 0 ? posts.map(post => <PostCard key={post._id} post={post} />) : 
      <h3 className="text-2xl text-center pt-4 dark:text-gray-400">No posts</h3>}
    </>
  );
}
