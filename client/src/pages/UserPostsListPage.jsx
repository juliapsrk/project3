import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

import { listPosts } from '../services/post';
import AuthenticationContext from '../context/authentication';

const UserPostsListPage = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    listPosts(id).then((data) => {
      setPosts(data.posts);
      console.log(data.posts);
    });
  }, []);

  const thisUserPosts = posts && posts.filter((post) => id === post.owner);

  return (
    <div style={{ margin: '3rem' }}>
      <h3>Posts</h3>
      {user && Boolean(thisUserPosts.length) && (
        <ul>
          {thisUserPosts.map((post) => (
            <li>
              <Link to={`/post/${post._id}`} key={post._id}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserPostsListPage;
