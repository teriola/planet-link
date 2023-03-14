export default function Avatar({ size }) {
  let width = 'w-12';
  if (size === 'lg') width = 'w-24 md:w-36';

  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      <img
        src="https://static.toiimg.com/thumb/imgsize-23456,msid-96818818,width-600,resizemode-4/96818818.jpg"
        alt="profile picture" />
    </div>
  );
}
