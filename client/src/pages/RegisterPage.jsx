import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { registerUser } from '../services/authentication';
import Wrapper from '../assets/wrappers/auth-forms';
import { FormInput, FormTextArea, FormSelect } from '../components/FormRow';
import ImageInput from '../components/ImageInput';

const RegisterPage = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [user, setUserState] = useState({
    name: '',
    email: '',
    password: '',
    picture: '',
    description: '',
    userType: 'private'
  });

  const { setUser } = useContext(AuthenticationContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserState({ ...user, [name]: value })
  };

  const handleImageChange = (picture) => {
    setUserState(prevUser => ({ ...prevUser, picture }))
  }

  const handleRegistration = (event) => {
    event.preventDefault();
    if (user.name) {
      registerUser(user)
        .then((data) => {
          const id = data.user._id;
          setUser(data.user);
          navigate(`/profile/${id}`);
          setUserState('');
        });
    } else {
      console.log("error");
    }
  };

  return (
    <Wrapper>
      <h1>Register</h1>
      <form onSubmit={handleRegistration}>

        {/* name input */}
        <FormInput
          type="text"
          name="name"
          value={user.name}
          handleChange={handleChange}
        />
        {/* email input */}
        <FormInput
          type="email"
          name="email"
          value={user.email}
          handleChange={handleChange}
        />

        {/* password input */}
        <FormInput
          type="password"
          name="password"
          value={user.password}
          handleChange={handleChange}
        />

        {/* picture file */}
        <ImageInput
          image={user.picture}
          name="picture"
          value={user.picture}
          handleChange={handleImageChange}
        />

        {/* description textarea */}

        <FormTextArea
          labelText='description'
          name='description'
          value={user.description}
          optionValue1='private'
          optionValue2='center'
          handleChange={handleChange}
        ></FormTextArea>

        {/* user type select */}

        <FormSelect
          labelText='userType'
          id="userType"
          name='userType'
          value={user.userType}
          optionValue1='private'
          optionValue2='center'
          handleChange={handleChange}
        ></FormSelect>


        <div>
          <p>Already a member?
            <Link to="/log-in">Login</Link>
          </p>
        </div>

        <button type='submit'>Register</button>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;