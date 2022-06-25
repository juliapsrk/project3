import React from 'react';
import PostForm from '../components/PostForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { postEdit, postLoad } from '../services/post';

const PostEditPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  const navigate = useNavigate();

  const handlePostEdit = () => {
    postEdit(id, post).then((data) => {
      navigate(`/post/${id}`);
    });
  };

  useEffect(() => {
    postLoad(id).then((data) => setPost(data.post));
  }, [id]);

  return (
    <div>
      {post && (
        <>
          <PostForm
            post={post}
            onPostChange={setPost}
            onFormSubmit={handlePostEdit}
            buttonLabel="Edit post"
          />
        </>
      )}
    </div>
  );
};

export default PostEditPage;
