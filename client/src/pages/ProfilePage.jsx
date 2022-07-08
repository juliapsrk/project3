import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { profileLoad } from '../services/profile';
import placeholder from '../assets/images/placeholder.png';
import ProfileWrapper from '../assets/wrappers/ProfileWrapper';
import AuthenticationContext from '../context/authentication';
import Bookmark from './Bookmark';

const ProfilePage = () => {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    profileLoad(id).then((data) => {
      setProfile(data.user);
      setPosts(data.posts);
      setPets(data.pets);
      console.log(data.pets);
    });
  }, [id]);

  const { user } = useContext(AuthenticationContext);

  return (
    <ProfileWrapper>
      {profile && (
        <div className="page-wrapper content">
          <div className="profile-page">
            <div className="profile-photo">
              {(profile.picture && (
                <img src={profile.picture} alt={profile.name} />
              )) || <img src={placeholder} alt={profile.name} />}
            </div>

            {/* profile-content */}
            <div>
              <div>
                <h2>
                  {profile.name.charAt(0).toUpperCase() +
                    profile.name.slice(1).toLowerCase()}
                </h2>
                <p>{profile.description}</p>

                <div className="flex-spa">
                  {user && user._id === id && (
                    <Link className="page-btn" to="/profile/edit">
                      Edit Profile
                    </Link>
                  )}
                  <p className="small">
                    User Type:{' '}
                    {profile.userType.charAt(0).toUpperCase() +
                      profile.userType.slice(1).toLowerCase()}
                  </p>
                </div>
              </div>

              <div className="division">
                <h3>Pets</h3>
                {/* {Boolean(pets.length) && (
                  <ul>
                    {pets.map((pet) => ({
                      if(pet) {
                        return (
                          <li>
                            <Link to={`/post/${pet._id}`} key={pet._id}>
                              {pet.name}
                            </Link>
                          </li>
                        );
                      }
                    }))}
                  </ul>
                )} */}
              </div>

              <div className="division">
                <h3>Posts</h3>
                {Boolean(posts.length) && (
                  <ul>
                    {posts.map((post) => (
                      <li>
                        <Link to={`/post/${post._id}`} key={post._id}>
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="division">
                <h3>Messages</h3>
                {user && user._id === id && (
                  <Link
                    to={`/message/list/`}
                    style={{
                      display: 'block',
                      marginBlock: '2rem',
                      color: 'crimson'
                    }}
                  >
                    View your message inbox
                  </Link>
                )}
              </div>

              <div className="division">
                <h3>Pet Bookmarks</h3>
                <Bookmark />
              </div>

              {user && user._id !== id && (
                <div className="division">
                  <Link className="btn" to={`/message/${id}`}>
                    Message This User
                  </Link>
                </div>
              )}
            </div>
            {/* end profile-content */}
          </div>
        </div>
      )}
    </ProfileWrapper>
  );
};

export default ProfilePage;
