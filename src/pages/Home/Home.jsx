import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import { getAllPosts } from "../../services/postService";
import PostFormCard from "./feed/PostFormCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPosts()
      .then(data => {
        setPosts(data);
      });
  }, []);
  console.log(posts);
  return (
    <>
      <PostFormCard />

      {posts.map(post => <PostCard key={post._id} post={post} />)}
    </>
  );
}
