import { Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import GenericMap from './GenericMap';

const PetMap = ({ pets, onMove }) => {
  const navigate = useNavigate();

  return (
    <GenericMap onMove={onMove}>
      {pets.map((pet) => (
        <Marker
          key={pet._id}
          location={{
            lat: pet.location.coordinates[1],
            lng: pet.location.coordinates[0]
          }}
          onClick={() => navigate(`/pet/${pet._id}`)}
        />
      ))}
    </GenericMap>
  );
};

export default PetMap;
