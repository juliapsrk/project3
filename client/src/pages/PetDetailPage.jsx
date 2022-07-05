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
// import PetWrapper from '../assets/wrappers/PetDetailPageStyle';
import './PetDetailPageStyle.scss';

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

  const bookmark = bookmarks && bookmarks.some((item) => item._id === id);

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
    // <PetWrapper>
    <div style={{ margin: '1rem' }}>
      {pet && (
        <>
          {/* <MapInput marker={pet.position}></MapInput> */}
          <div className="petdetail">
            <img src={pet.picture} alt={pet.name} />
          </div>
          <div className="top">
            <h1>
              {pet.name}, {pet.type}
            </h1>{' '}
            {user && (
              <>
                <div className="bookmarks">
                  {bookmarks &&
                    ((bookmark && (
                      <button
                        className="bookmark"
                        onClick={handleRemoveBookmark}
                      >
                        ❤️
                      </button>
                    )) || (
                      <button className="bookmark" onClick={handleSetBookmark}>
                        🤍
                      </button>
                    ))}
                </div>
              </>
            )}
          </div>
          <div className="header-part">
            <p>
              {pet.breed} | {pet.gender} | {pet.age} Year
              {pet.age !== 1 ? 's' : ''}
            </p>
            <p id="last">{pet.createdAt}</p>
          </div>
          {pet.adopted ? 'Adopted' : 'Up for Adoption'} | Current owner:
          <Link
            style={{ marginLeft: '0.3rem' }}
            to={`/profile/${pet.owner._id}`}
          >
            {pet.owner.name}
          </Link>
          <div className="section">
            <div className="description">
              About: {pet.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti minus, voluptatum iure ex optio ut, vel
              ea adipisci aspernatur veniam perferendis architecto amet quo
              eaque inventore voluptates rerum, cum reprehenderit?
            </div>
            {/* <p>Position: {pet.position.lat}, {pet.position.lng}</p> */}
            <div className="options">
              {user && (
                <>
                  {(pet.owner._id === user._id && (
                    <div className="buttons1">
                      <button className="btn">
                        <Link to={`/pet/${id}/edit`}>Edit</Link>
                      </button>
                      <button className="btn" onClick={handlePetDeletion}>
                        Delete
                      </button>
                    </div>
                  )) || (
                    <button>
                      <Link className="btn" to="/register">
                        Register
                      </Link>
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="map">Map here</div>
        </>
      )}
    </div>
    // </PetWrapper>
  );
};

export default PetDetailPage;
