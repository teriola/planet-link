import { useEffect, useState } from "react";
import Card from "../ui/Card";
import { getComments } from "../../services/postService";
import { Link } from "react-router-dom";
import Avatar from "../ui/Avatar";

export default function Comments({ postId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(postId).then(setComments);
    }, [postId]);

    return (
        <Card>
            <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 bg-gray-700 bg-opacity-50 z-50">
                <div className="bg-white p-4 rounded-md shadow-md">
                    {comments.map(comment => {
                        console.log(comment._owner.profilePicture);
                        return (
                            <div key={comment._id} className="flex mt-3 gap-3">
                                <div>
                                    <Link to={`/profile/${comment._owner._id}/posts`} className="cursor-pointer">
                                        <Avatar user={comment._owner.profilePicture} />
                                    </Link>
                                </div>
                                <div className="grow rounded-full">
                                    <p>{comment.text}</p>
                                    {/*<button className="absolute top-3 right-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" > <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /> </svg>
          </button> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Card >
    );
}