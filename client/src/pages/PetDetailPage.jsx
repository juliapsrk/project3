import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import {
  bookmarkAdd,
  bookmarkList,
  bookmarkRemove,
  petLoad
} from '../services/pet';
// import Bookmark from './Bookmark';

const PetDetailPage = () => {
  const { id } = useParams();

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
      let bookmarked = bookmarks.find((item) => item && item.startsWith(id));
      console.log(bookmarked);
      if (bookmarked) setBookmark(data.pet);
    });
  }, [id, bookmarks]);

  const { user } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleSetBookmark = () => {
    // let bookmarked = bookmarks.find((item) => item.startsWith(id));
    if (!bookmark)
      bookmarkAdd(id).then((data) => {
        // setBookmark([...bookmark, data.pet]);

        setBookmark(data);
        // setBookmarks([...bookmarks, data]);
        console.log(data);
      });
  };

  const handleRemoveBookmark = () => {
    // if (bookmark)
    bookmarkRemove(id).then(() => {
      setBookmark(null);
      // const filteredOut = bookmarks.filter((item) => item.pet._id !== id);
      // const index = bookmarks.indexOf(id);
      // if (index) bookmarks.splice(index, 1);
      // setBookmarks(bookmarks);
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
            <h3>
              {pet.breed} {pet.type}
            </h3>
          </header>

          <section>
            <h3>Pictures</h3>
            {/* {pet.pictures.map((picture) => (
              <img key={picture} src={picture} />
            ))} */}
          </section>

          <section>
            <p>{pet.description}</p>
          </section>

          <aside>
            <h4>Owned by {pet.owner}</h4>
            <h4>Actions</h4>
            {
              user && (
                <>
                  {(pet && !bookmark && (
                    <button onClick={handleSetBookmark}>Bookmark</button>
                  )) || (
                    <button onClick={handleRemoveBookmark}>
                      Remove bookmark
                    </button>
                  )}
                  {/* <Bookmark bookmarks={bookmarks} /> */}
                  {/* {(user && (
              <>
                {pet.owner === user && (
                  <Link to={`/pet/${id}/edit`} className='btn'>
                    Edit Pet Listing
                  </Link>
                  
                )}*/}
                </>
              )
              // )) || (
              //   <Link to="/register" className="btn">
              //     Register to Message Owner or Bookmark Listing
              //   </Link>
            }
          </aside>
        </>
      )}
    </div>
  );
};

export default PetDetailPage;
