import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { listPosts, postCreate } from '../services/post';
import AuthenticationContext from '../context/authentication';

const CreatePostPage = () => {
  const [post, setPost] = useState({
    title: '',
    description: ''
  });

  // const [profile, setProfile] = useState(null);
  // const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthenticationContext);

  // const { id } = useParams();

  // useEffect(() => {
  //   listPosts().then((data) => {
  //     setPosts(data.posts);
  //   });
  // }, []);

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

      {/* {user && Boolean(posts.length) && (
        <ul>
          {posts.map((post) => (
            <li>
              <Link to={`/post/${post._id}`} key={post._id}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default CreatePostPage;
