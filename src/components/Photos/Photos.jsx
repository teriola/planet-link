import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../ui/Loading';
import Card from '../ui/Card';
import { useProfileContext } from '../../contexts/ProfileContext';
import { getUserPosts } from '../../services/postService';

export default function Photos() {
  const [userPhotos, setUserPhotos] = useState([]);
  const { id } = useParams();
  const { isLoading } = useProfileContext();

  useEffect(() => {
    getUserPosts(id).then(posts => setUserPhotos(posts.sort((a, b) => b.likes - a.likes)));
  }, []);

  return (
      <Card>
        <h2 className='text-3xl mb-2'>Photos</h2>
          <div className="grid justify-center md:grid-cols-2 gap-4">
              {isLoading ? <Loading /> : 
                  userPhotos?.length > 0 ? 
                  userPhotos.map(photo => (
                  <div key={photo._id} className="justify-center rounded-md overflow-hidden h-48 flex items-center shadow-md">
                      <img src={photo.image} alt="photo" />
                  </div>
                  )) : null}
          </div>
        {userPhotos?.length <= 0 ? <h3 className="text-2xl text-center pt-4 dark:text-gray-400">No photos</h3> : null}
      </Card>
  );
};
