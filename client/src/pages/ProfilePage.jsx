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
          <img src={profile.picture} alt={profile.name} style={{ maxWidth: '150px', borderRadius: '50%' }} />
          <h2>{profile.name.charAt(0).toUpperCase() + profile.name.slice(1).toLowerCase()}</h2>
          <p>{profile.description}</p>
        </div>
      )}
      {user && user._id === id && (
        <Link className="btn" to="/profile/edit">
          Edit Profile
        </Link>
      )}

    </div>
  );
}

export default ProfilePage;