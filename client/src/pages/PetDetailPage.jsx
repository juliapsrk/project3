import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { petLoad } from '../services/pet';

const PetDetailPage = () => {
  const { id } = useParams();

  const [pet, setPet] = useState(null);

  useEffect(() => {
    petLoad(id).then((data) => setPet(data.pet));
  }, [id]);

  const { user } = useContext(AuthenticationContext);

  return (
    <div>
      {pet && (
        <>
          <header>
            <h1>{pet.name}</h1>
            <h3>
              {pet.breed} {pet.type}
            </h3>
          </header>

          <section>
            <h3>Pictures</h3>
            {/* {pet.pictures.map((picture) => (
              <img key={picture} src={picture} />
            ))} */}
          </section>

          <section>
            <p>{pet.description}</p>
          </section>

          <aside>
            <h4>Owned by {pet.owner}</h4>
            {/* Actions: */}
            {user && (
              <>
                {pet.owner === user && (
                  <Link to={`/pet/${id}/edit`} className='btn'>
                    Edit Pet Listing
                  </Link>
                )}
                <button>Bookmark</button>
              </>
            )}
          </aside>
        </>
      )}
    </div>
  );
};

export default PetDetailPage;
