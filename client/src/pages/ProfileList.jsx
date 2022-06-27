import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { listProfiles } from "../services/profile";
import AuthenticationContext from '../context/authentication';


const ListAllProfiles = () => {

  const [profiles, setProfiles] = useState([]);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    listProfiles()
      .then((data) => {

        setProfiles(data.profiles);
        console.log(data.profiles)
      });
  }, []);




  return (
    <div>
      {profiles.map((profile) => (
        <li>
          <Link to={`/message/${profile._id}`}>
            <img src={profile.picture} alt={profile.name} />
            {profile.name}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default ListAllProfiles;