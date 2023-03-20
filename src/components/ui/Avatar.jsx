export default function Avatar({ size, profilePicture }) {
  let width = 'w-12';
  if (size === 'lg') width = 'w-24 md:w-36';

  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      <img
        src={profilePicture}
        alt="profile picture" />
    </div>
  );
}
