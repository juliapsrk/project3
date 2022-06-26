import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { signOutUser } from './../services/authentication';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthenticationContext);

  const handleSignOut = () => {
    signOutUser().then(() => {
      setUser(null);
      navigate(`/`);
    });
  };

  return (
    <nav>
      {(user && (
        <>
          <Link to={`/profile/${user._id}`}>{user.name} Profile </Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      )) || (
          <>
            <Link to="/log-in">Log In</Link>
            <Link to="/register">Register</Link>
          </>
        )}
    </nav>
  );
};

export default Navbar;
