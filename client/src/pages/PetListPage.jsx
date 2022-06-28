// 'Adopt' button on home page

import { useEffect, useState } from 'react';
import PetCard from '../components/PetCard';
import { listPetData } from '../services/pet';

const PetListPage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    listPetData().then((data) => {
      setPets(data.pets);
    });
  }, []);

  return (
    <div>
      {pets.map((pet) => (
        <PetCard key={pet._id} pet={pet} />
      ))}
    </div>
  );
};

export default PetListPage;
