import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PetForm from '../components/PetForm';
import { petCreate } from '../services/pet';

const PetCreationPage = () => {
  const [pet, setPet] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    gender: 'male',
    description: '',
    listed: false,
    adopted: false,
<<<<<<< HEAD
    pictures: []
=======
    pictures: ''
>>>>>>> d3084e399b5cc8a8e5f82f6f1f2997871c9aedeb
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
        buttonLabel="Add Pet Listing"
        method="POST"
        action="/pet/:id"
      />
    </div>
  );
};

export default PetCreationPage;
