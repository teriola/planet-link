import { useState } from "react";
import PostFormCard from "../components/Forms/PostFormCard";
import PostCard from "../components/PostCard";
import { useAuthContext } from "../contexts/AuthContext";
import { usePostsContext } from "../contexts/PostsContext";
import { HomeContext } from "../contexts/HomeContext";
import EditPost from "../components/Edit/EditPost";

export default function Home() {
  const { user } = useAuthContext();
  const { posts, onEditPostHandler } = usePostsContext();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const onEditHandler = (post) => {
    setIsEditing(true);
    setSelectedPost(post);
  };

  const onEditSubmitHandler = (data) => {
    onEditPostHandler(selectedPost._id, data);
    setIsEditing(false);
    setSelectedPost(null);
  };

  return (
    <HomeContext.Provider value={{ onEditHandler, setIsEditing, selectedPost }}>
      {isEditing &&
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75'>
          <EditPost onEditSubmitHandler={onEditSubmitHandler} onCloseEdit={setIsEditing} />
        </div>}
      {user.accessToken ? <PostFormCard /> : null}
      {posts?.length > 0 ? posts.map(post => <PostCard key={post._id} onEditPostHandler={onEditHandler} post={post} />) :
        <h3 className="text-2xl text-center pt-4 dark:text-gray-400">No posts</h3>}
    </HomeContext.Provider>
  );
}
