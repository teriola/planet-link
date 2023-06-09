import { useEffect, useState } from 'react';
import PostCard from '../PostCard';
import { getUserPosts } from '../../services/postService';
import { useParams } from 'react-router-dom';
import Loading from '../ui/Loading';
import { useProfileContext } from '../../contexts/ProfileContext';

export default function Posts() {
    const [userPosts, setUserPosts] = useState([]);
    const { id } = useParams();
    const { isLoading, setIsLoading } = useProfileContext();

    useEffect(() => {
        getUserPosts(id).then(posts => setUserPosts(posts.sort((a, b) => b.likes - a.likes)));
    }, []);

    // const onEditSubmitHandler = async (data) => {
    //     setIsLoading(true);
    //
    //     const editedPost = await editPost(postId, data);
    //     setUserPosts(state => state.map(x => x._id == postId ? editedPost : x));
    //     onEditPostHandler(selectedPost._id, data);
    //     setIsEditing(false);
    //     setSelectedPost(null);
    //
    //     setIsLoading(false);
    // };

    const onCommentHandler = (postId, data) => {
        setSelectedPost(state => ({ ...state, comments: [...comments, data] }));
    }

    /*onEditSubmitHandler={onEditSubmitHandler}*/
    return (
        <>
            {isLoading ? <Loading /> :
                userPosts?.length > 0 ?
                    userPosts.map(post => <PostCard key={post._id}  post={post} onCommentHandler={onCommentHandler} />) :
                    <h3 className="text-2xl text-center pt-4 dark:text-gray-400">No posts</h3>}
        </>
    );
};
