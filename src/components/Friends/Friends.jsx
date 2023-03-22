import FriendInfo from "./FriendInfo";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserFriends } from '../../services/userService';

export default function Friends() {
  const [friends, setFriends] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    getUserFriends(id).then(setFriends);
  }, [id]);

  return (
    <Card>
      <h2 className="text-3xl mb-2">Friends</h2>
      {friends.length > 0 ?
        <div className="grid sm:grid-cols-2 gap-6 grid-cols-1">
          {friends.map(user => <FriendInfo key={user._id} {...user} />)}
        </div> :
        <h3 className="text-2xl text-center pt-4">No friends</h3>
      }
    </Card>
  );
};
