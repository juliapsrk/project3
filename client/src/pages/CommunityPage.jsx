import { useEffect, useState } from 'react';
import { ListAllCommunityPosts } from '../services/community';
import PostCard from '../components/PostCard';

const Community = () => {
  const [communityPosts, setCommunityPosts] = useState([]);

  useEffect(() => {
    ListAllCommunityPosts().then((data) => {
      setCommunityPosts(data.posts);
    });
  }, []);

  return (
    <div>
      {communityPosts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Community;
