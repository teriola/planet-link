import { useEffect, useState } from "react";
import Card from "../ui/Card";
import { getComments } from "../../services/postService";
import { Link } from "react-router-dom";
import Avatar from "../ui/Avatar";

export default function Comments({ postId, closeComments }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(postId).then(setComments);
    }, [postId]);


    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75'>
            <Card width={true}>
                <div className="relative">
                    <div className="flex flex-col gap-3 items-center relative">
                        <svg onClick={closeComments} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-0 top-0 cursor-pointer"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>
                        {comments.map(comment => (
                            <div key={comment._id} className="w-3/4 flex items-center gap-4">
                                <div>
                                    <Link to={`/profile/${comment._owner._id}/posts`} className="cursor-pointer">
                                        <Avatar user={comment._owner} />
                                    </Link>
                                </div>
                                <div className="grow rounded-full">
                                    <p>{comment.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card >
        </div>
    );
}
