import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MapInput from '../components/MapInput';
import AuthenticationContext from '../context/authentication';
import {
  bookmarkAdd,
  bookmarkList,
  bookmarkRemove,
  petLoad,
  petDelete
} from '../services/pet';
// import Bookmark from './Bookmark';

const PetDetailPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [pet, setPet] = useState(null);
  const [bookmark, setBookmark] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    bookmarkList().then((data) => {
      setBookmarks(data.pets);
    });
  }, []);

  useEffect(() => {
    petLoad(id).then((data) => {
      setPet(data.pet);
      let bookmarked = bookmarks.find((item) => item && item.startsWith(id));
      if (bookmarked) setBookmark(data.pet);
    });
  }, [id, bookmarks]);

  const { user } = useContext(AuthenticationContext);

  const handlePetDeletion = () => {
    petDelete(id).then(() => {
      navigate('/');
    });
  };

  const handleSetBookmark = () => {
    if (!bookmark)
      bookmarkAdd(id).then((data) => {
        setBookmark(data);
      });
  };

  const handleRemoveBookmark = () => {
    bookmarkRemove(id).then(() => {
      setBookmark(null);
      navigate(`/pet/${id}`);
    });
  };

  return (
    <div>
      {pet && (
        <>
          {/* <MapInput marker={pet.position}></MapInput> */}
          <header>
            <h1>
              {pet.name}, {pet.age}
            </h1>
            <p>
              {pet.type} | {pet.breed} | {pet.gender}{' '}
            </p>
            <p>
              {pet.name} is {pet.adopted ? 'Adopted' : 'Up for Adoption'}
            </p>
            <p>description: {pet.description}</p>
            {/* <p>Position: {pet.position.lat}, {pet.position.lng}</p> */}
            <p>Current owner: {pet.owner.name}</p>
          </header>
          {user && (
            <>
              {(pet && !bookmark && (
                <button onClick={handleSetBookmark}>Bookmark</button>
              )) || (
                <button onClick={handleRemoveBookmark}>Remove bookmark</button>
              )}
              {(user && pet.owner._id === user._id && (
                <>
                  <Link to={`/pet/${id}/edit`}>Edit</Link>
                  <button onClick={handlePetDeletion}>Delete</button>
                </>
              )) || <Link to='/register'>Register</Link>}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PetDetailPage;
