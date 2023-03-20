import PostCard from "../../components/PostCard";
import PostFormCard from "./feed/PostFormCard";

export default function Home() {
  return (
    <>
      <PostFormCard />

      {/* Posts go here: */}
      <PostCard />
    </>
  );
}
