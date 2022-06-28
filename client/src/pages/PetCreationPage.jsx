import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PetForm from '../components/PetForm';
import { petCreate } from '../services/pet';

const PetCreationPage = () => {
  const [pet, setPet] = useState({
    name: 'Mozarella',
    type: 'dog',
    breed: 'Samoyed',
    age: 1,
    description: 'Adorable floof ball called Mozarella',
    listed: true,
    adopted: false,
    // wrote 'picture' everywhere in singular form (Pet Model and Router)
    picture: []
  });

  const navigate = useNavigate();

  const handlePetCreation = () => {
    petCreate(pet).then((data) => {
      const id = data.pet._id;
      navigate(`/pet/${id}`);
    });
  };

  return (
    <div>
      <h1>Add New Pet Listing</h1>
      <PetForm
        pet={pet}
        onPetChange={setPet}
        onPetSubmit={handlePetCreation}
        buttonLabel='Add Pet Listing'
        method='POST'
        action='/pet'
      />
    </div>
  );
};

export default PetCreationPage;
