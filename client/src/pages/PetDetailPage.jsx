import { useContext, useEffect, useLayoutEffect, useState } from 'react';
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
  const [bookmarks, setBookmarks] = useState(null);

  useEffect(() => {
    bookmarkList().then((data) => {
      setBookmarks(data.pets);
    });
  }, []);

  useEffect(() => {
    petLoad(id).then((data) => {
      setPet(data.pet);
    });
  }, [id]);

  const { user } = useContext(AuthenticationContext);

  const bookmark =
    bookmarks && bookmarks.some((item) => item && item.startsWith(id));

  const handlePetDeletion = () => {
    petDelete(id).then(() => {
      navigate('/');
    });
  };

  const handleSetBookmark = () => {
    bookmarkAdd(id)
      .then((data) => {
        return bookmarkList();
      })
      .then((data) => {
        setBookmarks(data.pets);
      });
  };

  const handleRemoveBookmark = () => {
    bookmarkRemove(id)
      .then((data) => {
        return bookmarkList();
      })
      .then((data) => {
        setBookmarks(data.pets);
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
              {bookmarks &&
                ((bookmark && (
                  <button onClick={handleRemoveBookmark}>
                    Remove bookmark
                  </button>
                )) || <button onClick={handleSetBookmark}>Bookmark</button>)}
              {(pet.owner._id === user._id && (
                <>
                  <Link to={`/pet/${id}/edit`}>Edit</Link>
                  <button onClick={handlePetDeletion}>Delete</button>
                </>
              )) || <Link to="/register">Register</Link>}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PetDetailPage;
