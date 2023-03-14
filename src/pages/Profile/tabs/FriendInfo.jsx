import Card from "../../../components/ui/Card";
import Avatar from "../../../components/ui/Avatar";

export default function FriendInfo(){
  return(
    <div className="flex gap-2 border-b pb-2 border-gray-300">
      <Avatar />
      <div>
        <h3 className="font-bold text-xl">Rumen Radev</h3>
        <div className="text-sm leading-3">5 mutual friends</div>
      </div>
      <input 
        type="button" 
        className="ml-auto cursor-pointer bg-blue md:text-md text-sm font-bold text-white md:px-1 grow-0 px-4 md:py-0 py-0 rounded-lg" value="View profile" 
      />
    </div>
  );
};
