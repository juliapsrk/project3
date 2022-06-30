import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { listProfiles } from '../services/profile';
import CardWrapper from '../assets/wrappers/CardWrappr';
import placeholder from '../assets/images/placeholder.png';
import AuthenticationContext from '../context/authentication';

const ListAllCenters = () => {
  const [profiles, setProfiles] = useState([]);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    listProfiles().then((data) => {
      setProfiles(data.profiles);
      console.log(data.profiles);
    });
  }, []);

  return (
    <div>
      {
        <input
          type='text'
          placeholder='Search ...'
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            paddingBlock: '0.5rem'
          }}
        />
      }
      {profiles
        .filter((profile) => profile.name.toLowerCase().includes(query))
        .map((profile) => (
          <CardWrapper>
            <Link to={`/profile/${profile._id}`} className='picture'>
              {(profile.picture && (
                <img src={profile.picture} alt={profile.name} />
              )) || <img src={placeholder} alt={profile.name} />}
            </Link>
            <div className='content'>
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
              <div className='buttons'>
                <Link to={`/message/${profile._id}`} className='btn'>
                  Message
                </Link>
                {profile.userType && profile.userType !== 'center' && (
                  <Link to={`/profile/${profile._id}`} className='btn'>
                    Profile
                  </Link>
                )}
                {profile.userType && profile.userType === 'center' && (
                  <Link to={`/profile/${profile._id}`} className='btn brown'>
                    {profile.userType}
                  </Link>
                )}
              </div>
            </div>
          </CardWrapper>
        ))}
    </div>
  );
};

export default ListAllCenters;
