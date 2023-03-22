import PostFormCard from '../components/Forms/PostFormCard';
import Posts from "../components/Posts/Posts";

export default function Home() {
  return (
    <>
      <PostFormCard />
      <Posts isAllPosts={true} userId={null} />
    </>
  );
}
