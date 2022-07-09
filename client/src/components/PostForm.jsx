import React from 'react';
// import ImageInput from './ImageInput';
import './PostFormStyle.scss';

const PostForm = (props) => {
  const handlePostSubmission = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };
  return (
    <>
      <div className="postForm">
        <h1 style={{ textAlign: 'center' }}>Create a post</h1>
        <form onSubmit={handlePostSubmission}>
          <label htmlFor="input-title">Title:</label>
          <input
            id="input-title"
            type="text"
            placeholder="Post title"
            value={props.post.title}
            onChange={(event) => {
              props.onPostChange({ ...props.post, title: event.target.value });
            }}
          />

          <label>Description:</label>
          <textarea
            value={props.post.description}
            onChange={(event) => {
              props.onPostChange({
                ...props.post,
                description: event.target.value
              });
            }}
          ></textarea>

          {/* <label>Picture</label>
        <ImageInput
          image={props.post.picture}
          name="picture"
          value={props.post.picture}
          handleChange={(picture) =>
            props.onPostChange({ ...props.post, picture })
          }
        /> */}

          <button className="btn1">{props.buttonLabel}</button>
        </form>
      </div>{' '}
    </>
  );
};

export default PostForm;
