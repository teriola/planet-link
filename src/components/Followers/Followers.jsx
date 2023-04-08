import FollowerInfo from "./FollowerInfo";
import Card from "../ui/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserFollowers } from '../../services/userService';

export default function Followers() {
  const [followers, setFollowers] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    getUserFollowers(id).then(setFollowers);
  }, [id]);

  return (
    <Card>
      <h2 className="text-3xl mb-2">Followers</h2>
      {followers.length > 0 ?
        <div className="grid sm:grid-cols-2 gap-6 grid-cols-1">
          {followers.map(user => <FollowerInfo key={user._id} {...user} />)}
        </div> :
        <h3 className="text-2xl text-center pt-4">No followers</h3>
      }
    </Card>
  );
};
