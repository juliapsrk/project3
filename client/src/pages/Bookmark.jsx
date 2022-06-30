import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { bookmarkList } from '../services/pet';
// import AuthenticationContext from '../context/authentication';

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  // const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    bookmarkList().then((data) => {
      console.log(data.pets);
      setBookmarks(data.pets);
    });
  }, []);

  return (
    <div>
      Bookmark
      <div style={{ borderBottom: '1px solid gray' }}>
        {Boolean(bookmarks.length) && (
          <>
            {bookmarks.map((bookmark) => {
              console.log(bookmark);
              return (
                <>
                  <p>Hello</p>
                  {/* <p key={bookmark._id}> {bookmark._id}</p> */}
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Bookmark;
