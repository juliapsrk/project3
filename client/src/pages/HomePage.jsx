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
      {/* <div className="hero"></div> */}
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
    </Wrapper>
  );
};

export default HomePage;
