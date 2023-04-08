import Avatar from "../ui/Avatar";
import { Link, useOutletContext } from "react-router-dom";

export default function FollowerInfo({ _id, name, surname, profilePicture }) {
  const onFollowClick = useOutletContext();

  return (
    <div className="flex gap-2 border-b pb-2 border-gray-300">
      <Link to={`/profile/${_id}/posts`}>
          <Avatar user={{profilePicture}} />
      </Link>
      <div>
        <h3 className="font-bold text-xl">{name} {surname}</h3>
        {/* <div className="text-sm leading-3">5 mutual followers</div> */}
      </div>
      <input
        className="ml-auto cursor-pointer bg-blue md:text-md text-sm font-bold text-white md:px-4 grow-0 px-4 py-0 rounded-lg" 
        value="Follow"
        type="button"
        onClick={() => onFollowClick(_id)}
      />
    </div>
  );
};
