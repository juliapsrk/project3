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
            <h1>Name: {pet.name}</h1>
            <p>Type: {pet.type}</p>
            <p>Age: {pet.age}</p>
            <p>Adopted: {pet.adopted ? "Adopted" : "for Adoption"}</p>
            <p>Breed: {pet.breed}</p>
            <p>Listed: {pet.listed ? "Listed" : "Not Listed"}</p>
            <p>description: {pet.description}</p>
            {/* <p>Position: {pet.position.lat}, {pet.position.lng}</p> */}
            <p>Pet owner ID/Name: {pet.owner.name}</p>
          </header>
          {user && (
            <>
              {(pet && !bookmark && (
                <button onClick={handleSetBookmark}>Bookmark</button>
              )) || (
                  <button onClick={handleRemoveBookmark}>
                    Remove bookmark
                  </button>
                )}
              {(user && pet.owner._id === user._id && (
                <>
                  <Link to={`/pet/${id}/edit`}>Edit Pet Listing</Link>
                  <button onClick={handlePetDeletion}>
                    Delete Pet Listing
                  </button>
                </>

              ) || <Link to='/register'>Register</Link>)}

            </>
          )}
        </>
      )}
    </div>
  );
}

export default PetDetailPage;
