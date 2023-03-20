export default function Avatar({ size, user }) {
  let width = 'w-12';
  if (size === 'lg') width = 'w-24 md:w-36';

  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      <img
        className="w-full"
        src={user?.profilePicture}
        alt="profile picture" />
    </div>
  );
}
