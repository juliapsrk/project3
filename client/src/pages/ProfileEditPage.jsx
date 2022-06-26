import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import Wrapper from '../assets/wrappers/auth-forms';
import { FormInput, FormTextArea, FormSelect } from '../components/FormRow';
import ImageInput from '../components/ImageInput';

import { profileLoad, profileEdit } from '../services/profile';

const ProfileEditPage = () => {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    picture: '',
    description: '',
    userType: 'private'
  });

  const { user, setUser } = useContext(AuthenticationContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfile({ ...user, [name]: value })
  };

  const handleImageChange = (picture) => {
    setProfile(prevUser => ({ ...prevUser, picture }))
  }

  useEffect(() => {
    if (user) {
      profileLoad(user._id).then((data) => setProfile(data.user));
    }
  }, [user]);

  const handleProfileEdit = (event) => {
    event.preventDefault();
    if (user.name) {
      profileEdit(profile)
        .then((data) => {
          const id = data.user._id;
          setUser(data.user);
          navigate(`/profile/${id}`);
        });
    } else {
      console.log("error");
    }
  };


  return (
    <Wrapper>
      <h1>Edit Profile</h1>

      <form onSubmit={handleProfileEdit}>

        {/* name input */}
        <FormInput
          type="text"
          name="name"
          value={profile.name}
          handleChange={handleChange}
        />
        {/* email input */}
        <FormInput
          type="email"
          name="email"
          value={profile.email}
          handleChange={handleChange}
        />

        <ImageInput
          image={profile.picture}
          name="picture"
          value={profile.picture}
          handleChange={handleImageChange}
        />

        {/* description textarea */}

        <FormTextArea
          labelText='description'
          name='description'
          value={profile.description}
          optionValue1='private'
          optionValue2='center'
          handleChange={handleChange}
        ></FormTextArea>

        <button>Edit Profile</button>
      </form>
    </Wrapper>
  );
}

export default ProfileEditPage;