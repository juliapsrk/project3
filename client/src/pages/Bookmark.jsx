import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bookmarkList } from '../services/pet';
import AuthenticationContext from '../context/authentication';

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    bookmarkList().then((data) => {
      // console.log(data.pets);
      setBookmarks(data.pets);
    });
  }, []);

  return (
    <div>
      Bookmark
      <div style={{ borderBottom: '1px solid gray' }}>
        {user && Boolean(bookmarks.length) && (
          <>
            {bookmarks.map((pet) => {
              console.log(pet);
              if (pet) {
                let item = pet.split(' ');
                return <Link to={`/pet/${item[0]}`}>{item[1]}</Link>;
              }
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Bookmark;
