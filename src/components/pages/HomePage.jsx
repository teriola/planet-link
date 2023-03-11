import NavigationCard from "../NavigationCard";
import Card from "../Card";
import PostFormCard from "../PostFormCard";
import Avatar from "../Avatar";
import PostCard from "../PostCard";

export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-3/12">
        <NavigationCard />
      </div>
      <div className="w-9/12">
        <PostFormCard />
        <PostCard />
      </div>
    </div>
  );
}
