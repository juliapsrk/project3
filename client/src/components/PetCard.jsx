import { Link } from 'react-router-dom';
import './PetCard.scss';

const PetCard = ({ pet }) => (
  <Link className='pet-card' to={`/pet/${pet._id}`}>
    <img src='' alt={pet.name} />
    <span>
      {pet.name} | {pet.type}
      <br />
      {/* show 'heart' icon for bookmark as button so 
      user can immediately remove bookmarks from his 
      profile page without having to go into pet/:id 
      page first */}
    </span>
  </Link>
);

export default PetCard;
