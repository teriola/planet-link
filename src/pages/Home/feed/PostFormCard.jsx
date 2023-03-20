import { Link } from "react-router-dom";
import Avatar from "../../../components/ui/Avatar";
import Card from "../../../components/ui/Card";
import { useAuthContext } from "../../../contexts/AuthContext";
import Buttons from "./Buttons";

export default function PostFormCard() {
  const { user } = useAuthContext();
  return (
    <Card>
      <div className="flex gap-3">
        <Link to={`/profile/${user._id}/`}>
          <Avatar user={user} />
        </Link>
        <textarea className="grow p-3 h-14 dark:bg-blackbg" placeholder="What's on your mind?" ></textarea>
      </div>
      <Buttons />
    </Card>
  );
}
