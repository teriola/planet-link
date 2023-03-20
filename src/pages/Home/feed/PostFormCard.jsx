import { Link } from "react-router-dom";
import Avatar from "../../../components/ui/Avatar";
import Card from "../../../components/ui/Card";
import Buttons from "./Buttons";

export default function PostFormCard() {
  return (
    <Card>
      <div className="flex gap-3">
        <Link to="/profile/posts">
          <Avatar />
        </Link>
        <textarea className="grow p-3 h-14 dark:bg-blackbg" placeholder="What's on your mind?" ></textarea>
      </div>

      <Buttons />

    </Card>
  );
}
