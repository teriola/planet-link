import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import Avatar from "./ui/Avatar";
import Card from "./ui/Card";
import Dropdown from './ui/Dropdown';
import { Link } from "react-router-dom";
import { useLike } from "../hooks/useLike";
import { useOutsideClick } from "../hooks/useOutsideClick";
import Comments from "./Comments/Comments";
import { postComment } from "../services/postService";

export default function PostCard({ post, onEditPostHandler, onCommentHandler }) {
    // Get logged in user
    const { user } = useAuthContext();

    // Destructure data from post's owner
    const { name, surname, profilePicture, _id, createdOn } = post.owner;

    // Dropdown menu on post
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [btnRef] = useOutsideClick(setDropdownOpen);

    // Manage likes
    const { likes, liked, onLikeClick } = useLike(post, user._id);

    // Manage comments
    const [showComments, setShowComments] = useState(false);
    const closeComments = () => {
        setShowComments(false);
    }
    const [comment, setComment] = useState('');
    const onCommentSubmitHandler = () => {
        postComment(post._id, { text: comment }).then(onCommentHandler);
    }

    // Manage edit post
    const onEditClick = () => {
        onEditPostHandler(post);
    };

    return (
        <>
            {showComments && (
                <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 bg-gray-700 bg-opacity-50 z-50">
                    <Comments closeComments={closeComments} postId={post._id} />
                </div>
            )}

            <Card>
                <div className="flex gap-3">
                    <div>
                        <Link to={`/profile/${_id}/posts`} className="cursor-pointer">
                            <Avatar user={{ profilePicture }} />
                        </Link>
                    </div>
                    <div className="grow">
                        <p>
                            <Link to={`/profile/${_id}/posts`} className="font-semibold cursor-pointer hover:underline">{name} {surname}</Link>
                            {' '}posted a <a href="#" className="text-blue">photo</a>
                        </p>
                        <p>
                            <a className="text-gray-500 text-sm">{createdOn}</a>
                        </p>
                    </div>
                    {user.accessToken ? (
                        <>
                            <button ref={btnRef} className="text-gray-400" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" > <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                            </button>
                            <div className="relative">
                                {dropdownOpen && <Dropdown postId={post._id} ownerId={post.owner._id}>
                                    <Link
                                        onClick={onEditClick}
                                        className="flex gap-3 py-2 my-2 hover:bg-blue hover:text-white -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /> </svg>
                                        Edit
                                    </Link>
                                </Dropdown>}
                            </div>
                        </>
                    ) : null}
                </div>
                <div>
                    <p className="my-3 text-sm">{post.text}</p>
                    <div className="grow rounded-md w-full overflow-hidden">
                        <img
                            className="w-full"
                            src={post.image}
                            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbnFSv2TiYBCO6Atfgeilxj03DIwLjmPFIA&usqp=CAU"
                            alt="post"
                        />
                    </div>
                    <div className="mt-5 flex gap-8">
                        <button className="flex gap-2 items-center" onClick={onLikeClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={liked ? 'red' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" > <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /> </svg>
                            {likes.length}
                        </button>
                        <button className="flex gap-2 items-center" onClick={() => setShowComments(!showComments)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" > <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /> </svg>
                            {post.comments.length}
                        </button>
                        {/* <button className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" > <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /> </svg>
                            </button> */}
                    </div>
                </div>
                {
                    user.accessToken ? (
                        <>
                            <div className="flex mt-3 gap-3">
                                <div>
                                    <Link to={`/profile/${user._id}/posts`} className="cursor-pointer">
                                        <Avatar user={user} />
                                    </Link>
                                </div>
                                <div className="grow rounded-full relative">
                                    <textarea
                                        className="border block w-full p-4 px-4 h-12 overflow-hidden rounded-3xl dark:bg-blackbg dark:border-black"
                                        placeholder="Leave a comment"
                                        value={comment}
                                        onChange={e => setComment(e.target.value)}
                                    />
                                    <button onClick={onCommentSubmitHandler} className="absolute bottom-4 right-4 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /> </svg>
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : null
                }
            </Card >
        </>
    );
}
