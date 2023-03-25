import PostFormCard from '../components/Forms/PostFormCard';
import Posts from "../components/Posts/Posts";
import { useAuthContext } from '../contexts/AuthContext';

export default function Home() {
  const { user } = useAuthContext();
  return (
    <>
      { user.accessToken ? <PostFormCard /> : null }
      <Posts isAllPosts={true} userId={null} />
    </>
  );
}
