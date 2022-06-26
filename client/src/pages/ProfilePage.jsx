import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { profileLoad } from '../services/profile';

import AuthenticationContext from '../context/authentication';

const ProfilePage = () => {

  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    profileLoad(id)
      .then((data) => {
        setProfile(data.user)
      })
  }, [id]);

  const { user } = useContext(AuthenticationContext);

  return (
    <div className='profile-page'>
      {profile && (
        <div>

          <div style={{ borderBottom: "1px solid gray" }}>
            <img src={profile.picture} alt={profile.name} style={{ maxWidth: '150px', borderRadius: '50%' }} />
            <h2>{profile.name.charAt(0).toUpperCase() + profile.name.slice(1).toLowerCase()}</h2>
            <p>{profile.description}</p>
          </div>

          <div style={{ borderBottom: "1px solid gray" }}>
            {
              profile.userType === 'center' && (
                "Content related to user-type Center ... this text will change depending on the user type"
              ) || (
                "Content related to user-type Private ...  this text will change depending on the user type"
              )
            }
          </div>

          <div style={{ borderBottom: "1px solid gray" }}>
            <h2>Posts</h2>
            <p>listing all user's posts</p>
          </div>

          <div style={{ borderBottom: "1px solid gray" }}>
            <h3>Messages</h3>
            <p>listing user's messages</p>
          </div>

          <div style={{ borderBottom: "1px solid gray" }}>
            <h2>Pet Bookmarks</h2>
            <p>listing user's Bookmarks</p>
          </div>
        </div>

      )}
      {user && user._id === id && (
        <Link className="btn" to="/profile/edit" style={{ display: 'block', marginBlock: "2rem", color: 'crimson' }}>
          Edit Profile
        </Link>
      )}

    </div>
  );
}

export default ProfilePage;