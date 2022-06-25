import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PetForm from '../components/PetForm';
import { petEdit, petLoad } from '../services/pet';

const PetEditPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();

  const handlePetEdit = () => {
    petEdit(id, pet).then((data) => {
      navigate(`/pet/${id}`);
    });
  };

  useEffect(() => {
    petLoad(id).then((data) => setPet(data.pet));
  }, [id]);

  return (
    <div>
      <h1>Edit Pet Listing</h1>
      {pet && (
        <PetForm
          pet={pet}
          onPetChange={setPet}
          onPetSubmit={handlePetEdit}
          buttonLabel='Edit Pet Listing'
        />
      )}
    </div>
  );
};

export default PetEditPage;
