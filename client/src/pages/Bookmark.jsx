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
    <div>
      Bookmark
      <div style={{ borderBottom: '1px solid gray' }}>
        {user && Boolean(bookmarks.length) && (
          <>
            <ul>
              {bookmarks.map((pet) => {
                if (pet) {
                  // let item = pet.split(' ');

                  return (
                    <li style={{ listStyle: 'none' }} key={pet._id}>
                      <Link to={`/pet/${pet._id}`}>
                        <img src={pet.pictures[0]} alt={pet.name} /> {pet.name}
                      </Link>
                    </li>
                    // <li style={{ listStyle: 'none' }} key={item[0]}>
                    //   <Link to={`/pet/${item[0]}`}>
                    //     {item[1]} <img src={item[2]} alt={item[1]} />
                    //   </Link>
                    // </li>
                  );
                }
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Bookmark;
