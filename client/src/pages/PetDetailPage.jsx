import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
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
  const { user } = useContext(AuthenticationContext);

  const [pet, setPet] = useState(null);
  const [bookmark, setBookmark] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    bookmarkList().then((data) => {
      console.log(data);
      setBookmarks(data.pets);
    });
  }, []);

  useEffect(() => {
    petLoad(id).then((data) => {
      setPet(data.pet);
      console.log(data.pet);
      let bookmarked = bookmarks.find((item) => item && item.startsWith(id));
      console.log(bookmarked);
      if (bookmarked) setBookmark(data.pet);
    });
  }, [id, bookmarks]);

  const handlePetDeletion = () => {
    petDelete(id).then(() => {
      navigate('/');
    });
  };

  const handleSetBookmark = () => {
    if (!bookmark)
      bookmarkAdd(id).then((data) => {
        setBookmark(data);
        console.log(data);
      });
  };

  const handleRemoveBookmark = () => {
    bookmarkRemove(id).then(() => {
      setBookmark(null);
      navigate(`/pet/${id}`);
      console.log('removed!', id);
    });
  };

  return (
    <div>
      {pet && (
        <>
          <header>
            <h1>{pet.name}</h1>
            <span>
              {pet.type} | {pet.breed} | {pet.age} y/o
            </span>
          </header>

          <section>
            <h4>More about {pet.name}:</h4>
            <p>"{pet.description}"</p>
          </section>

          <section>
            <h3>Pictures</h3>
            {/* {pet.pictures.map((picture) => (
              <img key={picture} src={picture} />
            ))} */}
          </section>

          <aside>
            <h4>Owned by {pet.owner}</h4>
            <br />
            {user && (
              <>
                {(pet && !bookmark && (
                  <button onClick={handleSetBookmark}>Bookmark</button>
                )) || (
                    <button onClick={handleRemoveBookmark}>
                      Remove bookmark
                    </button>
                  )}
                {(user && pet.owner === user._id && (
                  <>
                    <Link to={`/pet/${id}/edit`}>Edit Pet Listing</Link>
                    <button onClick={handlePetDeletion}>
                      Delete Pet Listing
                    </button>
                  </>
                )) || <Link to='/register'>Register</Link>}
              </>
            )}
          </aside>
        </>
      )}
    </div>
  );
};

export default PetDetailPage;
