import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import MapInput from '../components/MapInput';
import AuthenticationContext from '../context/authentication';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { MapInput, SingleMarkerMap } from '../components/MapInput'
import '@splidejs/react-splide/css';

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

  const formatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  return (
    // <PetWrapper>
    <div style={{ margin: '3.5rem' }}>
      {pet && (
        <>
<<<<<<< HEAD
          <MapInput>
            <SingleMarkerMap marker={pet.position} />
          </MapInput>

          <header>
            <h1>
              {pet.name}
            </h1>
            <p>
              {pet.age}  {pet.type} | {pet.breed} | {pet.gender}{' '}
            </p>
=======
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
>>>>>>> d3084e399b5cc8a8e5f82f6f1f2997871c9aedeb
            <p>
              {pet.breed} | {pet.gender} | {pet.age} Year
              {pet.age !== 1 ? 's' : ''}
            </p>
<<<<<<< HEAD
            <p>description: {pet.description}</p>

            {pet.position && (<p>Position: {pet.position.lat}, {pet.position.lng}</p>)}
            {
              pet.position && (
                <pre><code>={JSON.stringify(pet.position, null, 2)}</code></pre>
              )
            }


            <p>Current owner: {pet.owner.name}</p>

            {(pet.pictures && (
              <Splide options={{ perPage: 3, arrows: false, pagination: false, drag: "free", easing: "cubic-bezier(0.25, 1, 0.5, 1)" }}>

                {pet.pictures.map((picture) => (
                  <SplideSlide key={picture}><img key={picture} src={picture} alt='' /></SplideSlide>
                ))}
              </Splide>
            ))}

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
=======
            <p id="last">{formatter.format(Date.parse(pet.createdAt))}</p>
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
>>>>>>> d3084e399b5cc8a8e5f82f6f1f2997871c9aedeb
                <>
                  {(pet.owner._id === user._id && (
                    <div className="buttons1">
                      <button className="btn1">
                        <Link to={`/pet/${id}/edit`}>Edit</Link>
                      </button>
                      <button className="btn1" onClick={handlePetDeletion}>
                        Delete
                      </button>
                    </div>
                  )) || (
                    <div className="buttons1">
                      <button className="btn1">
                        <Link to="/register">Register</Link>
                      </button>
                    </div>
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
