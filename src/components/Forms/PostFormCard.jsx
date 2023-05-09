import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../ui/Avatar";
import Card from "../ui/Card";
import { useAuthContext } from "../../contexts/AuthContext";
import Buttons from '../ui/Buttons';
import { usePostsContext } from "../../contexts/PostsContext";

export default function PostFormCard() {
    // Get logged in user
    const { user } = useAuthContext();

    // Handle form data
    const [postData, setPostData] = useState({
        text: '',
        picture: '',
    });
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setPostData(state => ({ ...state, [name]: value }));
    };

    // Get callbacks to manage post submit
    const { onAddPostHandler } = usePostsContext();
    const onSubmit = (postData) => {
        setPostData({ text: '', picture: '' });
        onAddPostHandler(postData);
    };

    return (
        <Card>
            <div className="flex gap-3">
                <Link to={`/profile/${user?._id}/posts`}>
                    <Avatar user={user} />
                </Link>
                <textarea
                    value={postData.text}
                    onChange={onChangeHandler}
                    name='text'
                    className="grow p-3 h-14 dark:bg-blackbg"
                    placeholder="What's on your mind?" ></textarea>
            </div>
            <div className="flex mt-2 gap-2">
                <Buttons picture={postData.picture} onChangeHandler={onChangeHandler} />
                <div className="text-right">
                    <button
                        onClick={() => onSubmit(postData)}
                        className="bg-blue text-white px-6 py-1 rounded-md">
                        Post
                    </button>
                </div>
            </div>
        </Card>
    );
}
