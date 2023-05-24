import { useState } from "react";
import { likePost, unlikePost } from "../services/postService";

export function useLike(post, userId){
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(() => {
    return post.likes.includes(userId);
  });
  console.log(likes);
  const onLikeClick = async (userId) => {
    if(likes.includes(userId)){
      await unlikePost(post._id);
      setLikes(likes => likes.filter(x => x != userId));
    }else{
      await likePost(post._id);
      setLikes(likes => [...likes, userId]);
    }
    setLiked(!liked);
  };

  return { likes, liked, onLikeClick };
}
