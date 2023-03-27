import { useState } from 'react';
import PostFormCard from '../components/Forms/PostFormCard';
import Posts from "../components/Posts/Posts";
import { useAuthContext } from '../contexts/AuthContext';
import { HomeContext } from '../contexts/HomeContext';
import { createPost } from '../services/postService';

export default function Home() {
  const { user } = useAuthContext();
  const [newPost, setNewPost] = useState();

  const onSubmitHandler = async (postData) => {
    try {
      const post = await createPost(postData.text, postData.picture, user._id);
      setNewPost(post);
    } catch (err) {
      console.log(err);
    }
  };

  const contextValue = {
    newPost,
  };

  return (
    <HomeContext.Provider value={contextValue}>
      {user.accessToken ? <PostFormCard onSubmitHandler={onSubmitHandler} /> : null}
      <Posts isAllPosts={true} userId={null} />
    </HomeContext.Provider>
  );
}
