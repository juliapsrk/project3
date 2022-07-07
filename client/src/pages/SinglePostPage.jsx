import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { postDelete, postLoad } from '../services/post';
import AuthenticationContext from '../context/authentication';
import './SinglePostPageStyle.scss';

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
    <div className="container1" style={{ margin: '3.5rem' }}>
      {singlePost && (
        <>
          <div className="post-info-part">
            {' '}
            <h2>{singlePost.title}</h2>
            <p>
              Text: {singlePost.description} Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laborum corrupti vel, tempora maxime
              at iste asperiores esse error velit deleniti dicta a. Aspernatur,
              iste ipsa veniam laborum dolorum deleniti eligendi.
            </p>
            <p>
              Type: <strong>{singlePost.type}</strong>
            </p>
            <br></br>
            <small style={{ display: 'flex', flexDirection: 'row' }}>
              By
              <Link
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: '0.3rem'
                }}
                to={`/profile/${singlePost.owner._id}`}
              >
                <img
                  src={singlePost.owner.picture}
                  alt="post-pic"
                  style={{
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    marginRight: '0.2rem'
                  }}
                />
                {singlePost.owner.name}
              </Link>
            </small>
          </div>

          <div className="buttons2">
            {(user && singlePost.owner._id === user._id && (
              <>
                <button className="btn2">
                  <Link to={`/post/${id}/edit`}>Edit post</Link>
                </button>
                <button className="btn2" onClick={handlePostDeletion}>
                  Delete post
                </button>
              </>
            )) || <Link to="/register">Register</Link>}
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePostPage;
