export default function Avatar({ size, user, isEditing }) {
    let width = 'w-12';
    let height = 'h-12';
    if (size === 'lg') {
        width = 'w-24 md:w-36';
        height = 'h-24 md:h-36';
    }

    return (
        <div className={`${width} ${height} inline-block rounded-full overflow-hidden`}>
            <img
                className=""
                src={user.profilePicture}
                alt="profile picture" />
        </div>
    );
}
