import { useState } from "react";
import PostFormCard from "../components/Forms/PostFormCard";
import PostCard from "../components/PostCard";
import { useAuthContext } from "../contexts/AuthContext";
import { usePostsContext } from "../contexts/PostsContext";
import { HomeContext } from "../contexts/HomeContext";
import EditPost from "../components/Edit/EditPost";
import Loading from "../components/ui/Loading";

export default function Home() {
    const { user } = useAuthContext();

    const { posts, onEditPostHandler, setIsLoading, isLoading } = usePostsContext();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedPost, setselectedpost] = useState(null);

    const onEditHandler = (post) => {
        setIsEditing(true);
        setselectedpost(post);
    };

    const oneditsubmithandler = (data) => {
        setIsLoading(true);

        onEditPostHandler(selectedpost._id, data);
        setIsEditing(false);
        setselectedpost(null);

        setIsLoading(false);
    };

    const onCommentHandler = (postId, data) => {
        setSelectedPost(state => ({ ...state, comments: [...comments, data]}));
    }

    return (
        <HomeContext.Provider value={{ onEditHandler, setIsEditing, selectedPost }}>
            {isEditing &&
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75'>
                    <EditPost onEditSubmitHandler={onEditSubmitHandler} onCloseEdit={setIsEditing} />
                </div>}
            {user.accessToken ? <PostFormCard /> : null}
            {isLoading ? <Loading /> :
                posts?.length > 0 ? posts.map(post => <PostCard key={post._id} onCommentHandler={onCommentHandler} onEditPostHandler={onEditHandler} post={post} />) :
                    <h3 className="text-2xl text-center pt-4 dark:text-gray-400">No posts</h3>}
        </HomeContext.Provider>
    );
}
