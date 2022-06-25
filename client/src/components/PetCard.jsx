import { Link } from 'react-router-dom';
import './PetCard.scss';

const PetCard = ({ pet }) => (
  <Link className='pet-card' to={`/pet/${pet._id}`}>
    <img src='' alt={pet.name} />
    <span>
      {/* if breed is known */}
      {pet.breed} {pet.type} called {pet.name}
    </span>
    {/* if age is known */}
    <small>{pet.age}</small>
  </Link>
);

export default PetCard;
