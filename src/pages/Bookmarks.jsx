import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { getUserBookmarks } from '../services/postService';


export default function Bookmarks() {
  const id = useParams().id;
  const [bookbarks, setBookmarks] = useState({});
  useEffect(() => {
    getUserBookmarks(id).then(setBookmarks);
  }, [id]);

  return (
    <>
      <h1 className="text-6xl mb-4 text-gray-400">Bookmarks</h1>
      {bookbarks.length > 0 ?
        bookbarks.map(post => <PostCard key={post._id} post={post} />) :
        <h3 className="text-2xl text-center pt-4 dark:text-gray-500">No bookmarks</h3>
      }
    </>
  );
};
