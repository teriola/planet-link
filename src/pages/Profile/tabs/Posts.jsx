import { useEffect, useState } from "react";
import PostCard from "../../../components/PostCard";
import { useProfileContext } from "../../../contexts/ProfileContext";
import { getPostsByUser } from "../../../services/postService";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const { user } = useProfileContext();

  useEffect(() => {
    console.log(user);
    getPostsByUser(user._id).then((posts) => {
      console.log(posts);
      setPosts(posts);
    });
  }, []);

  console.log(posts);
  return (
    <div>
      {posts.length > 0 ?
        posts.map(post => <PostCard key={post._id} post={post} />) :
        <h3 className="text-2xl text-center pt-4">No posts</h3>
      }
    </div>
  );
};
