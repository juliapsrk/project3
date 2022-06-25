import { Marker } from '@react-google-maps/api';
import GenericMap from './GenericMap';

const PetInputMap = ({ location, onLocationChange }) => {
  const handlePetLocationSetting = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    onLocationChange({
      type: 'Point',
      coordinates: [lng, lat]
    });
  };

  return (
    <GenericMap onClick={handlePetLocationSetting}>
      {location && (
        <Marker
          location={{
            lat: location.coordinates[1],
            lng: location.coordinates[0]
          }}
        />
      )}
    </GenericMap>
  );
};

export default PetInputMap;
