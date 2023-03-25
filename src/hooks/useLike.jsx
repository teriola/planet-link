import { useEffect, useState } from "react";
import { likePost, unlikePost } from "../services/postService";

export function useLike(post, initialLikes, userId){
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isLiked = post.likedUsers.find(x => x.toString() == userId); 
    if (isLiked){
      setLiked(true);
    }
  }, []);

  const onLikeClick = () => {
    if(liked){
      setLikes(likes => likes - 1);
      unlikePost(post._id);
    }else{
      setLikes(likes => likes + 1);
      likePost(post._id);
    }
    setLiked(!liked);
  };

  return { likes, onLikeClick, liked };
}
