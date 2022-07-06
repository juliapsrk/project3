import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import truncate from '../utilities/truncate';
import { format } from 'date-fns';
import { listLatest } from '../services/post';
import { petLatest } from '../services/pet';
import HomeWrapper from '../assets/wrappers/HomeWrapper';
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
    <HomeWrapper>
      <div className='hero'></div>

      <div className='page-wrapper'>

        <h1 className='title center'>Meet Our Recent Arrivals</h1>
        <p className='slogan center'>
          The best way to save a beloved pet is to keep them out of the shelter system.
          <span>PetPaw a pet is a better kind of pet adoption, in every way.</span>
        </p>

        <div className='grid-list'>
          {
            pets.filter((pet) =>
              !pet.adopted
            ).map((pet) => {
              return (
                <div className='grid-item' key={pet._id}>
                  <Link to={`/pet/${pet._id}`}>
                    <div className='item-photo'><img src={pet.pictures[0]} alt={pet.name} /></div>
                    <div className='item-info'>
                      <h5>{pet.name}</h5>
                      <p>{pet.breed} / {pet.gender} / {pet.age} Year</p>
                      <p>{truncate(pet.description, 100)}</p>
                      <p className='post-date'>{format(new Date(pet.updatedAt), 'dd MMMM yyyy')}</p>
                    </div>

                  </Link>
                </div>
              );
            })
          }
        </div>

        <h1 className='title center'>Success! Recently Adopted!</h1>
        <p className='slogan center'>
          Direct pet adoption, from one good home to another.
          <span>PetPaw a dog or a cat keeps them out of shelters.</span>
        </p>

        <div className='grid-list'>
          {
            pets.filter((pet) =>
              pet.adopted
            ).map((pet) => {
              return (
                <div className='grid-item' key={pet._id}>
                  <Link to={`/pet/${pet._id}`}>
                    <div className='item-photo'><img src={pet.pictures[0]} alt={pet.name} /></div>
                    <div className='item-info'>
                      <h5>{pet.name}</h5>
                      <p>{pet.breed} / {pet.gender} / {pet.age} Year</p>
                      <p>{truncate(pet.description, 100)}</p>
                      <p className='post-date'>{format(new Date(pet.updatedAt), 'dd MMMM yyyy')}</p>
                    </div>
                  </Link>
                </div>
              );
            })
          }
        </div>
        {/* latest posts */}
        {/* {posts.map((post) => {
          return (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.type}</p>
              <p>{post.description}</p>
              <Link to={`/post/${post._id}`}>View Post</Link>
            </div>
          );
        })} */}
      </div>
    </HomeWrapper>
  );
};
export default HomePage;
