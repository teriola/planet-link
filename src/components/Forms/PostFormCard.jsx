import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../ui/Avatar";
import Card from "../ui/Card";
import { useAuthContext } from "../../contexts/AuthContext";
import Buttons from '../ui/Buttons';
import { createPost } from '../../services/postService';

export default function PostFormCard({ onSubmitHandler }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [postData, setText] = useState({
    text: '',
    picture: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setText(state => ({ ...state, [name]: value }))
  };

  const onCreatePost = async () => {
    await onSubmitHandler(postData);

    navigate('/');
  };


  return (
    <Card>
      <div className="flex gap-3">
        <Link to={`/profile/${user?._id}/`}>
          <Avatar user={user} />
        </Link>
        <textarea
          value={postData.text}
          onChange={onChangeHandler}
          name='text'
          className="grow p-3 h-14 dark:bg-blackbg"
          placeholder="What's on your mind?" ></textarea>
      </div>
      <Buttons picture={postData.picture} onChangeHandler={onChangeHandler} onSubmitHandler={onCreatePost} />
    </Card>
  );
}
