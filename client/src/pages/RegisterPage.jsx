import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { registerUser } from '../services/authentication';
import Wrapper from '../assets/wrappers/auth-forms';
import { FormRow } from '../components';
import ImageInput from '../components/ImageInput';

const RegisterPage = (props) => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [user, setUserState] = useState({
    name: '',
    email: '',
    password: '',
    picture: ''
  });

  const { setUser } = useContext(AuthenticationContext);

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value;
    setUserState({ ...user, [name]: value })
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    if (user.name) {
      registerUser(user)
        .then((data) => {
          setUser(data.user);
          navigate('/');
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
        <FormRow
          type="text"
          name="name"
          value={user.name}
          handleChange={handleChange}
        />
        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={user.email}
          handleChange={handleChange}
        />

        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={user.password}
          handleChange={handleChange}
        />

        <FormRow
          type="text"
          name="picture"
          value={user.picture}
          handleChange={handleChange}
        />

        <div>
          <p>Already a member?
            <Link to="/log-in">Login</Link>
          </p>
        </div>

        <button type='submit'>Register New Account</button>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;
