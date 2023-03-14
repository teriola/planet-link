import PostCard from "./feed/PostCard";
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
