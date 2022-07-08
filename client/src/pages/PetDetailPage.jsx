import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import MapInput from '../components/MapInput';
import AuthenticationContext from '../context/authentication';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { MapInput, SingleMarkerMap } from '../components/MapInput';
import PetDetailWrapper from '../assets/wrappers/PetDetailWrapper';
import { format } from 'date-fns';
import '@splidejs/react-splide/css';

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

  // const bookmark =
  //   bookmarks && bookmarks.some((item) => item && item.startsWith(id));
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
    <div style={{ margin: '3rem' }}>
      {pet && (
        <PetDetailWrapper>
          {pet.pictures && (
            <Splide
              options={{
                type: 'loop',
                perPage: 4,
                gap: '1rem',
                arrows: true,
                pagination: false,
                drag: 'free',
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {pet.pictures.map((picture) => (
                <SplideSlide key={picture}>
                  <img key={picture} src={picture} alt={pet.name} />
                </SplideSlide>
              ))}
            </Splide>
          )}

          <div className="pet-detail">
            <div className="pet-info">
              <h2>{pet.name}</h2>
              <h5>
                {pet.type} / {pet.gender} / {pet.age} Year
                {pet.age !== 1 ? 's' : ''}
              </h5>
              <p>{pet.description}</p>
            </div>

            <div className="pet-buttons">
              <p className="post-date">
                {format(new Date(pet.updatedAt), 'dd MMMM yyyy')}
              </p>
              <p>
                {pet.name} is {pet.adopted ? 'Adopted' : 'Up for Adoption'}
              </p>
              <Link className="page-btn" to={`/profile/${pet.owner._id}`}>
                Owner Profile
              </Link>
              <Link className="page-btn" to={`/message/${pet.owner._id}`}>
                Message Owner
              </Link>

              {(user && (
                <>
                  {bookmarks &&
                    ((bookmark && (
                      <button
                        className="page-btn"
                        onClick={handleRemoveBookmark}
                      >
                        Remove bookmark
                      </button>
                    )) || (
                      <button className="page-btn" onClick={handleSetBookmark}>
                        Bookmark
                      </button>
                    ))}
                  {pet.owner._id === user._id && (
                    <>
                      <Link className="page-btn" to={`/pet/${id}/edit`}>
                        Edit
                      </Link>
                      <button className="page-btn" onClick={handlePetDeletion}>
                        Delete
                      </button>
                    </>
                  )}
                </>
              )) || <Link to="/register">Register</Link>}
            </div>
          </div>

          <MapInput>
            <SingleMarkerMap marker={pet.position} />
          </MapInput>
        </PetDetailWrapper>
      )}
    </div>
  );
};

export default PetDetailPage;
