import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listLatest } from '../services/post';
import { petLatest } from '../services/pet';
import Wrapper from '../assets/wrappers/HomeWrapper';
const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    listLatest().then((data) => {
      const latestPosts = data.posts;
      setPosts(latestPosts);
      //console.log("postslatest", posts);
    });
  }, []);

  useEffect(() => {
    petLatest().then((data) => {
      const latestPets = data.pets;
      setPets(latestPets);
    });
  }, []);

  return (
    <Wrapper>
      <div className='hero'></div>
      <div className='page-wrapper'>
        <h1 className='title center'>Meet Our Recent Arrivals</h1>
        <p className='slogan center'>
          The best way to save a beloved pet is to keep them out of the shelter
          system.
          <span>
            Rehoming a pet is a better kind of pet adoption, in every way.
          </span>
        </p>
        <div className='list-grid'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        {posts.map((post) => {
          return (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.type}</p>
              <p>{post.description}</p>
              <Link to={`/post/${post._id}`}>View Post</Link>
            </div>
          );
        })}

        {pets.map((pet) => {
          return (
            <div key={pet._id}>
              <h2>{pet.name}</h2>
              <p>{pet.type}</p>
              <Link to={`/pet/${pet._id}`}>View Pet</Link>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default HomePage;
