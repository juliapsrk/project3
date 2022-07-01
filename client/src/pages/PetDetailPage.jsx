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
      console.log("pet data", pet)
      let bookmarked = bookmarks.find((item) => item && item.startsWith(id));
      console.log(bookmarked);
      if (bookmarked) setBookmark(data.pet);
    });
  }, [id, bookmarks]);

  const { user } = useContext(AuthenticationContext);

  const navigate = useNavigate();

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
            <h1>Name: {pet.name}</h1>
            <p>Type: {pet.type}</p>
            <p>Age: {pet.age}</p>
            <p>Adopted: {pet.adopted ? "Adopted" : "for Adoption"}</p>
            <p>Breed: {pet.breed}</p>
            <p>Listed: {pet.listed ? "Listed" : "Not Listed"}</p>
            <p>description: {pet.description}</p>
            <p>Position: {pet.position.lat}, {pet.position.lng}</p>
            <p>Pet owner ID: ???????????/</p>
          </header>

          <section>
            <h3>Pictures</h3>
            {/* {pet.pictures.map((picture) => (
              <img key={picture} src={picture} />
            ))} */}
          </section>

          <section>

          </section>

          <aside>
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
