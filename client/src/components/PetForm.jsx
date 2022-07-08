import { useEffect, useState } from 'react';
// import MapInput from './MapInput';
// import PetInputMap from './PetInputMap';
import MultipleImageInput from './MultipleImageInput';
import { MapInput, SingleMarkerMap } from '../components/MapInput';

const PetForm = ({
  pet,
  onPetChange,
  onPetSubmit,
  buttonLabel,
  method,
  action,
  position,
  marker,
  pictures
}) => {
  const handlePetFormSubmission = (event) => {
    event.preventDefault();
    onPetSubmit();
  };

  useEffect(() => {
    console.log({ pet });
  }, [pet]);
  return (
    <form onSubmit={handlePetFormSubmission} method={method} action={action}>
      {/* Name */}
      <div>
        <label htmlFor='input-name'>Name of Pet</label>
        <input
          id='input-name'
          type='string'
          placeholder='Pet Name'
          name='name'
          value={pet.name}
          onChange={(event) =>
            onPetChange({ ...pet, name: event.target.value })
          }
        />
      </div>

      {/* Type, Breed, Gender, Age */}
      <div>
        <label htmlFor='input-type'>Type of Animal</label>
        <select
          id='input-type'
          type='string'
          placeholder='Type of animal'
          name='type'
          value={pet.type}
          onChange={(event) =>
            onPetChange({ ...pet, type: event.target.value })
          }
        >
          <option value='--select--'></option>
          <option value='dog'>Dog</option>
          <option value='cat'>Cat</option>
          <option value='rabbit'>Rabbit</option>
          <option value='bird'>Bird</option>
        </select>

        <label htmlFor='input-breed'>Breed</label>
        <input
          id='input-breed'
          type='string'
          placeholder='Breed of pet'
          name='breed'
          value={pet.breed}
          onChange={(event) =>
            onPetChange({ ...pet, breed: event.target.value })
          }
        />

        <label htmlFor='input-gender'>Gender</label>
        <select
          id='input-gender'
          type='string'
          placeholder='Gender of pet'
          name='gender'
          value={pet.gender}
          onChange={(event) =>
            onPetChange({ ...pet, gender: event.target.value })
          }
        >
          <option value='--select--'></option>
          <option value='female'>female</option>
          <option value='male'>male</option>
        </select>

        <label htmlFor='input-age'>Age (in years)</label>
        <input
          id='input-age'
          type='number'
          min={0}
          placeholder='Age of pet'
          name='age'
          value={pet.age}
          onChange={(event) => onPetChange({ ...pet, age: event.target.value })}
        />
      </div>

      {/* Listed? */}
      <div>
        <label htmlFor='input-listed'>Pet is listed?</label>

        <div>
          <input
            id='input-listed'
            type='checkbox'
            name='listed'
            value={pet.listed}
            onChange={(event) =>
              onPetChange({ ...pet, listed: event.target.checked })
            }
          />
          <label htmlFor='input-listed'>{pet.listed ? 'Yes' : 'No'}</label>
        </div>
      </div>

      {/* Adopted? */}
      <div>
        <label htmlFor='input-adopted'>Pet is looking for a new home?</label>

        <div>
          <input
            id='input-adopted'
            type='checkbox'
            name='adopted'
            value={pet.adopted}
            onChange={(event) =>
              onPetChange({ ...pet, adopted: event.target.checked })
            }
          />
          <label htmlFor='input-adopted'>{pet.adopted ? 'Yes' : 'No'}</label>
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor='input-description'>
          A short description of your pet
        </label>
        <input
          id='input-description'
          type='string'
          max={1000}
          placeholder='Short description of your pet'
          name='description'
          value={pet.description}
          onChange={(event) =>
            onPetChange({ ...pet, description: event.target.value })
          }
        />
      </div>

      {/* Pictures */}
      <div>
        <label>Pet Pictures</label>
        <MultipleImageInput
          images={pet.pictures}
          onImagesChange={(pictures) => onPetChange({ ...pet, pictures })}
        />
      </div>

      <MapInput
        onMarkerChange={(value) => {
          onPetChange({ ...pet, position: value });
        }}
      >
        <SingleMarkerMap marker={pet.position} />
      </MapInput>

      <button type='submit'>{buttonLabel}</button>
    </form>
  );
};

export default PetForm;
