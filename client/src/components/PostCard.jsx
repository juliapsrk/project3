import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <Link className='post-card' to={`/post/${post._id}`}>
    <span>{post.title}</span>
  </Link>
);

export default PostCard;
