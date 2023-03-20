import FriendInfo from "./FriendInfo";
import Card from "../../../components/ui/Card";

export default function Friends(user) {
  return (
    <Card>
      <h2 className="text-3xl mb-2">Friends</h2>
      <div className="grid sm:grid-cols-2 gap-6 grid-cols-1">
        <FriendInfo user={user} />
      </div>
    </Card>
  );
};
