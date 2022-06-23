import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { registerUser } from '../services/authentication';

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

  const handleRegistration = (event) => {
    event.preventDefault();
    registerUser(user).then((data) => {
      setUser(data.user);
      navigate('/');
    });
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <label htmlFor="input-name">Name</label>
        <input
          id="input-name"
          placeholder="Name"
          value={user.name}
          onChange={(event) => setUserState({ ...user, name: event.target.value })}
        />

        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(event) => setUserState({ ...user, email: event.target.value })}
        />

        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(event) => setUserState({ ...user, password: event.target.value })}
        />

        <label htmlFor="input-picture">Picture</label>
        <input
          id="input-picture"
          type="text"
          placeholder="Picture"
          value={user.picture}
          onChange={(event) => setUserState({ ...user, picture: event.target.value })}
        />
        <button>Register New Account</button>
      </form>
    </div>
  );
};

export default RegisterPage;
