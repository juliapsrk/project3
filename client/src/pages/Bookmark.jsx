import React, { useLayoutEffect } from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bookmarkList } from '../services/pet';
import AuthenticationContext from '../context/authentication';

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    bookmarkList().then((data) => {
      setBookmarks(data.pets);
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem'
      }}
    >
      {user && Boolean(bookmarks.length) && (
        <>
          {bookmarks.map((pet) => {
            if (pet) {
              // let item = pet.split(' ');

              return (
                <div
                  style={{
                    textAlign: 'center',
                    width: '4rem',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    border: '1px solid grey',
                    padding: '0.1rem'
                  }}
                >
                  <Link to={`/pet/${pet._id}`} key={pet._id}>
                    <img src={pet.pictures[0]} alt={pet.name} />{' '}
                    <strong>{pet.name}</strong>
                  </Link>
                </div>
                // <li style={{ listStyle: 'none' }} key={item[0]}>
                //   <Link to={`/pet/${item[0]}`}>
                //     {item[1]} <img src={item[2]} alt={item[1]} />
                //   </Link>
                // </li>
              );
            }
          })}
        </>
      )}
    </div>
  );
};

export default Bookmark;
