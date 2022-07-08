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
      <Link to='/pet/list'>Adopt</Link>
      <Link to='/pet/'>Rehome a Pet</Link>
      <Link to='/profile'>Members</Link>
      {/* <Link to='/centers'>Centers</Link> */}
      <Link to='/community'>Community</Link>

      {user && (
        <div className='user-menu'>
          <Link to={`/profile/${user._id}`}>Your profile</Link>
          <Link to={'message/list/'}>Message</Link>
          <Link to={`/pet/list/user/${user._id}`}>Pets</Link>
          <Link to={'message/list/'}>Messages</Link>
          <Link to={'/'}>Posts</Link>
        </div>
      )}
      <div className='auth-links'>
        {(user && (
          <>
            <button onClick={handleSignOut}>Log Out</button>
          </>
        )) || (
            <>
              <Link to="/log-in">Log In</Link>
              <Link to="/register">Register</Link>
            </>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
