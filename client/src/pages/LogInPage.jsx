import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { logInUser } from '../services/authentication';
import Wrapper from '../assets/wrappers/auth-forms';
import { FormRow } from '../components';

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

        <div>
          <p>Not yet a member?
            <Link to="/register">Register</Link>
          </p>
        </div>

        <button>Log In to Existing Account</button>
      </form>
    </Wrapper>
  );
};

export default LogInPage;
