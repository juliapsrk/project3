// 'Adopt' button on home page

import { Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
// import MapInput from '../components/MapInput';
import { useNavigate } from 'react-router-dom';
import PetCard from '../components/PetCard';
import PetSearch from '../components/PetSearch';
import { MapInput, MultipleMarkerMap } from '../components/MapInput'
import { petAll } from '../services/pet';

const PetListPage = () => {

  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    type: '',
    gender: '',
    maximumAge: null,
    lat: 52.506630,
    lng: 13.291150,
    distance: 1
  });

  const [filteredPets, setFilteredPets] = useState([]);
  const [allPets, setAllPets] = useState([]);


  const filterPets = (nextPetArray) => {
    const newPetArray = nextPetArray
      .filter(
        pet => filters.type === "" || pet.type === filters.type
      )
      .filter(
        pet => filters.gender === "" || pet.gender === filters.gender
      )
      .filter(
        pet => !parseInt(filters.maximumAge, 10) || pet.age <= filters.maximumAge
      )
    //console.log("newPetArray", newPetArray)
    return newPetArray
  }

  const onFiltersChange = (nextFilters) =>
    setFilters(nextFilters)

  //const [pets, setPets] = useState([]);
  // useEffect(() => {
  //   petAll().then((data) => {
  //     setPets(data.pets);
  //   });
  // }, []);

  useEffect(() => {
    petAll(filters).then((data) => {
      setAllPets(data.pets)
      setFilteredPets(filterPets(data.pets))
    })
    //console.log(pets);
  }, []);
  // useEffect(() => setFilteredPets(filterPets(allPets)), [allPets])
  useEffect(() => setFilteredPets(filterPets(allPets)), [filters])

  // useEffect(() => {
  //   PetSearch(filters)

  // }, [filters]);

  // const handleMapMove = (lat, lng, distance) => {
  //   setFilters({ ...filters, lat, lng, distance });
  // };

  // <MultipleMarkerMap markers={pets.map(p => p.position)} onMove={handleMapMove} />

  const handleMapMove = (lat, lng, distance) => {
    setFilters({ ...filters, lat, lng, distance });
  };

  return (
    <div>
      <aside>
        <PetSearch filters={filters} onFiltersChange={onFiltersChange} />
      </aside>

      <MapInput>
        <MultipleMarkerMap markers={filteredPets.map(p => p.position)} onMove={handleMapMove} />
      </MapInput>

      <div>
        {filteredPets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetListPage;
