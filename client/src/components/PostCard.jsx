import { Link, useParams } from 'react-router-dom';
import './PostCard.scss';

const PostCard = ({ post }) => (
  <div className='post-card'>
    <Link to={`/post/${post._id}`}>
      <span>{post.title}</span>
      <br />
      <p>{post.description}</p>
      <small>{new Date(post.createdAt).toGMTString()}</small>
    </Link>
  </div>
);

export default PostCard;
