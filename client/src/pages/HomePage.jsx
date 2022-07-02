import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { listLatest } from "../services/post";
import { petLatest } from "../services/pet"
import Wrapper from "../assets/wrappers/HomeWrapper";
const HomePage = () => {

  const [posts, setPosts] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    listLatest()
      .then((data) => {
        const latestPosts = data.posts
        setPosts(latestPosts);
        //console.log("postslatest", posts);
      })
  }, [])

  useEffect(() => {
    petLatest()
      .then((data) => {
        const latestPets = data.pets
        setPets(latestPets)
      })
  }, [])

  return (
    <Wrapper>
      <div className="hero"></div>
      <div className="page-wrapper">
        <h1 className='title center'>Meet Our Recent Arrivals</h1>
        <p className='slogan center'>
          The best way to save a beloved pet is to keep them out of the shelter system.
          <span>PetPaw a pet is a better kind of pet adoption, in every way.</span>
        </p>

        <div className='grid-list'>

          <div className='grid-item'>
            <div className='item-photo'><img src='https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80' alt="" /></div>
            <div className='item-info'>
              <h5>Robi</h5>
              <p>breed / Male / 1 Year</p>
              <p>description</p>
            </div>
          </div>

          <div className='grid-item'>
            <div className='item-photo'><img src='https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80' alt="" /></div>
            <div className='item-info'>
              <h5>Robi</h5>
              <p>breed / Male / 1 Year</p>
              <p>description</p>
            </div>
          </div>

          <div className='grid-item'>
            <div className='item-photo'><img src='https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80' alt="" /></div>
            <div className='item-info'>
              <h5>Robi</h5>
              <p>breed / Male / 1 Year</p>
              <p>description</p>
            </div>
          </div>

        </div>


        <h1 className='title center'>Success! Recently Adopted!</h1>
        <p className='slogan center'>
          Direct pet adoption, from one good home to another.
          <span>PetPaw a dog or a cat keeps them out of shelters.</span>
        </p>

        <div className='grid-list'>

          <div className='grid-item'>
            <div className='item-photo'><img src='https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80' alt="" /></div>
            <div className='item-info'>
              <h5>Robi</h5>
              <p>breed / Male / 1 Year</p>
              <p>description</p>
            </div>
          </div>

          <div className='grid-item'>
            <div className='item-photo'><img src='https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80' alt="" /></div>
            <div className='item-info'>
              <h5>Robi</h5>
              <p>breed / Male / 1 Year</p>
              <p>description</p>
            </div>
          </div>

          <div className='grid-item'>
            <div className='item-photo'><img src='https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80' alt="" /></div>
            <div className='item-info'>
              <h5>Robi</h5>
              <p>breed / Male / 1 Year</p>
              <p>description</p>
            </div>
          </div>

        </div>





        {posts.map((post) => {
          return (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.type}</p>
              <p>{post.description}</p>
              <Link to={`/post/${post._id}`}>View Post</Link>
            </div>
          )
        })}

        {pets.map((pet) => {
          return (
            <div key={pet._id}>
              <h2>{pet.name}</h2>
              <p>{pet.type}</p>
              <Link to={`/pet/${pet._id}`}>View Pet</Link>
            </div>
          )
        })}
      </div>
    </Wrapper >
  );
};

export default HomePage;
