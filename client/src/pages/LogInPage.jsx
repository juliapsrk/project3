import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { logInUser } from '../services/authentication';
import Wrapper from '../assets/wrappers/auth-forms';
import { FormInput } from '../components/FormRow';

const LogInPage = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [user, setUserState] = useState({
    email: '',
    password: '',
  });

  const { setUser } = useContext(AuthenticationContext);

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value;
    setUserState({ ...user, [name]: value })
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    logInUser(user)
      .then((data) => {
        setUser(data.user);
        navigate('/');
      });
  };

  return (
    <Wrapper>
      <h1>Login</h1>
      <form onSubmit={handleLogIn}>

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

        <div>
          <p>Not yet a member?
            <Link to="/register">Register</Link>
          </p>
        </div>

        <button>Log In</button>
      </form>
    </Wrapper>
  );
};

export default LogInPage;