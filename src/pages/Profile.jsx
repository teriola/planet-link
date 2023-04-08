import Card from '../components/ui/Card';
import { useLocation, Link, Outlet, useParams } from 'react-router-dom';
import Avatar from '../components/ui/Avatar';
import { ProfileContext } from '../contexts/ProfileContext';
import { useEffect, useState } from 'react';
import { getUserById } from '../services/userService';
import { useAuthContext } from '../contexts/AuthContext';
import EditProfile from '../components/Edit/EditProfile';
import { useThemeContext } from '../contexts/ThemeContext';

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setUser] = useState({});
  const { user } = useAuthContext();
  const path = useLocation().pathname;
  const { id } = useParams();
  useEffect(() => {
    getUserById(id).then((user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [id]);

  const { theme, toggleTheme } = useThemeContext();

  const [isEditing, setIsEditing] = useState();
  const onEditHandler = (data) => {
    setUser(state => ({ ...data, _id: state._id }));
    setIsEditing(false);
  };

  const activeTab = 'flex gap-1 px-4 py-1 items-center border-blue border-b-4 text-blue font-bold';
  const nonActiveTab = 'flex gap-1 px-4 py-2 items-center border-b-4 border-b-white dark:border-graybg';

  return (
    <ProfileContext.Provider value={{ user: currentUser, isLoading, setIsLoading }}>
      {isEditing ? (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75'>
          <EditProfile onEditHandler={onEditHandler} onCloseEdit={setIsEditing} oldUserData={currentUser} />
        </div>
      ) : null}

      <Card noPadding={true}>
        <div className="relative overflow-hidden rounded-md">
          <div className='h-36 overflow-hidden flex justify-center items-center relative'>
            {isLoading ? null : <img src={currentUser.coverPicture} />}
          </div>
          <div className="absolute top-24 left-4">
            {isLoading ? null : <Avatar user={currentUser} size='lg' />} 
          </div>
          <div className="p-4 pt-0 md:pt-4 pb-0">
            <div className='ml-28 md:ml-40'>
              <h1 className='text-3xl font-bold'>{currentUser.name} {currentUser.surname}</h1>
              <div className='text-gray-500 leading-4 dark:text-whitetext'></div>
              {/* OWNER */}
              {user._id == currentUser._id ?
                      <>
                          <div className='absolute right-4 bottom-24 cursor-pointer' onClick={() => setIsEditing(!isEditing)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /> </svg>
                          </div>
                          <span className="absolute right-12 bottom-24 cursor-pointer" onClick={() => toggleTheme(user._id)}>
                              {theme === 'light'
                                  ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /> </svg>
                                  : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /> </svg>
                              }
                          </span>
                      </>
                      : null}
            </div>
            <div className='mt-4 md:mt-10 flex md:gap-0 gap-10 justify-center'>
              <Link to="posts" className={path.includes('posts') ? activeTab : nonActiveTab}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /> </svg>
                <span className="hidden sm:block">Posts</span>
              </Link>
              <Link to="about" className={path.includes('about') ? activeTab : nonActiveTab}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /> </svg>
                <span className="hidden sm:block">About</span>
              </Link>
              <Link to="friends" className={path.includes('friends') ? activeTab : nonActiveTab}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /> </svg>
                <span className="hidden sm:block">Friends</span>
              </Link>
              <Link to="photos" className={path.includes('photos') ? activeTab : nonActiveTab}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /> </svg>
                <span className="hidden sm:block">Photos</span>
              </Link>
            </div>
          </div>
        </div>
      </Card>
      <Outlet context={id} />
    </ProfileContext.Provider>
  );
}
