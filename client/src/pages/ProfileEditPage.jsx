import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/auth-forms';
import { FormRow } from '../components';
import AuthenticationContext from '../context/authentication';
import { profileLoad, profileEdit } from '../services/profile';

const ProfileEditPage = () => {

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    picture: '',
    description: ''
  });
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthenticationContext);

  useEffect(() => {
    if (user) {
      profileLoad(user._id).then((data) => setProfile(data.user));
    }
  }, [user]);

  const handleProfileEdit = (event) => {
    event.preventDefault();
    profileEdit(profile).then((data) => {
      setUser(data.user);
      navigate(`/profile/${user._id}`);
    });
  };


  return (
    <Wrapper>
      {/* <FormRow type='text' name='test' value='test'></FormRow> */}
      <form onSubmit={handleProfileEdit}>

        <label htmlFor="input-name">Name</label>
        <input
          id="input-name"
          placeholder="Name"
          value={profile.name}
          onChange={(event) => setProfile({ ...profile, name: event.target.value })}
        />

        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          placeholder="Email"
          value={profile.email}
          onChange={(event) => setProfile({ ...profile, email: event.target.value })}
        />
        <label htmlFor="input-picture">Picture</label>
        <input
          id="input-picture"
          type="text"
          placeholder="Picture"
          value={profile.picture}
          onChange={(event) => setProfile({ ...profile, picture: event.target.value })}
        />

        <label htmlFor="input-description">Description</label>
        <input
          id="input-description"
          type="text"
          placeholder="Description"
          value={profile.description}
          onChange={(event) => setProfile({ ...profile, description: event.target.value })}
        />



        <button>Register New Account</button>
      </form>
    </Wrapper>
  );
}

export default ProfileEditPage;