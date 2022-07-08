import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { petAllByUser } from "../services/pet";
import AuthenticationContext from '../context/authentication';
import PetCard from '../components/PetCard';

const PetsByUser = () => {

  const [pets, setPets] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    petAllByUser(id)
      .then((data) => {
        setPets(data.pets);
      });
  }, []);

  const { user } = useContext(AuthenticationContext);

  return (
    <div>
      {pets.map((pet) => {
        return (
          <PetCard pet={pet} key={pet._id}></PetCard>
        )
      })}
    </div>
  );
}

export default PetsByUser;