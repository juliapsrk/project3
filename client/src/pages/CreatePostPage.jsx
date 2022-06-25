import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { postCreate } from '../services/post';

const CreatePostPage = () => {
  const [post, setPost] = useState({
    title: '',
    description: '',
    type: 'petForAdoption'
  });

  const navigate = useNavigate();

  const handlePostCreation = () => {
    postCreate(post).then((data) => {
      const id = data.post._id;
      navigate(`/post/${id}`);
    });
  };

  return (
    <div>
      <PostForm
        post={post}
        onPostChange={setPost}
        onFormSubmit={handlePostCreation}
        buttonLabel="Add new post"
      />
    </div>
  );
};

export default CreatePostPage;
