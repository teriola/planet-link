import FriendInfo from "./FriendInfo";
import Card from "../../../components/ui/Card";

export default function Friends() {
  return (
    <Card>
      <h2 className="text-3xl mb-2">Friends</h2>
      <div className="grid gap-6 grid-cols-2">
        <FriendInfo />
        <FriendInfo />
        <FriendInfo />
        <FriendInfo />
      </div>
    </Card>
  );
};
