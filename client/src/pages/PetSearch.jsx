import { useEffect, useState } from 'react';
import PetSearchForm from '../components/PetSearchForm';
import { petSearch } from '../services/pet';
import './PetSearch.scss';
import PetMap from '../components/PetMap';

const PetSearch = () => {
  const [filters, setFilters] = useState({
    type: 'dog',
    breed: 'husky',
    listed: true,
    adopted: false,
    lat: 38.75,
    lng: -9.25,
    distance: 1
  });

  const [pets, setPets] = useState([]);

  useEffect(() => {
    petSearch(filters).then((data) => setPets(data.pets));
  }, [filters]);

  const handleMapMove = (lat, lng, distance) => {
    setFilters({ ...filters, lat, lng, distance });
  };

  return (
    <div className='pet-search-page'>
      <aside>
        <PetSearchForm filters={filters} onFiltersChange={setFilters} />
      </aside>
      <main>
        <PetMap pets={pets} onMove={handleMapMove} />
      </main>
    </div>
  );
};

export default PetSearch;
