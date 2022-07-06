import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { postDelete, postLoad } from '../services/post';
import AuthenticationContext from '../context/authentication';

const SinglePostPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useContext(AuthenticationContext);

  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    postLoad(id).then((data) => setSinglePost(data.post));
  }, [id]);

  const handlePostDeletion = () => {
    postDelete(id).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      {singlePost && (
        <>
          <div>
            <img src={singlePost.owner.picture} alt="post-pic" />
          </div>
          <h2>{singlePost.title}</h2>
          <p>{singlePost.description}</p>
          <strong>{singlePost.type}</strong>
          <small>
            By{' '}
            <Link to={`/profile/${singlePost.owner._id}`}>
              {singlePost.owner.name}
            </Link>
          </small>
          {(user && singlePost.owner._id === user._id && (
            <>
              <Link to={`/post/${id}/edit`}>Edit post</Link>
              <button onClick={handlePostDeletion}>Delete post</button>
            </>
          )) || <Link to="/register">Register</Link>}
        </>
      )}
    </div>
  );
};

export default SinglePostPage;
