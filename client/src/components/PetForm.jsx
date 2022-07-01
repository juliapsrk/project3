import { useState } from "react";
import MapInput from "./MapInput";

// import PetInputMap from './PetInputMap';
// import MultipleImageInput from './MultipleImageInput';




const PetForm = ({
  pet,
  onPetChange,
  onPetSubmit,
  buttonLabel,
  method,
  action,
  position,
  marker

}) => {
  const handlePetFormSubmission = (event) => {
    event.preventDefault();
    onPetSubmit();
  };

  return (
    <form onSubmit={handlePetFormSubmission} method={method} action={action}>
      <label htmlFor='input-name'>Name of Pet</label>
      <input
        id='input-name'
        type='string'
        placeholder='Pet Name'
        name='name'
        value={pet.name}
        onChange={(event) => onPetChange({ ...pet, name: event.target.value })}
      />

      <label htmlFor='input-type'>Type of Animal</label>
      <input
        id='input-type'
        type='string'
        placeholder='Type of animal'
        name='type'
        value={pet.type}
        onChange={(event) => onPetChange({ ...pet, type: event.target.value })}
      />

      {/* if breed is known */}
      <label htmlFor='input-breed'>Breed</label>
      <input
        id='input-breed'
        type='string'
        placeholder='Breed of pet'
        name='breed'
        value={pet.breed}
        onChange={(event) => onPetChange({ ...pet, breed: event.target.value })}
      />

      {/* if age is known */}
      <label htmlFor='input-age'>Age</label>
      <input
        id='input-age'
        type='number'
        min={0}
        placeholder='Age of pet'
        name='age'
        value={pet.age}
        onChange={(event) => onPetChange({ ...pet, age: event.target.value })}
      />

      <label htmlFor='input-listed'>Pet should be listed</label>
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
        <label htmlFor='input-listed'>
          {pet.listed ? 'Listed' : 'Unlisted'}
        </label>
      </div>

      <label htmlFor='input-adopted'>Pet is looking for adoption</label>
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
        <label htmlFor='input-adopted'>
          {pet.adopted ? 'Looking for a home' : 'Found a home'}
        </label>
      </div>

      <label htmlFor='input-description'>A short description of your pet</label>
      <textarea
        id='input-description'
        placeholder='A short description of your pet'
        name='description'
        value={pet.description}
        onChange={(event) =>
          onPetChange({ ...pet, description: event.target.value })
        }
      />

      <MapInput
        marker={pet.position}
        onMarkerChange={(value) => {
          onPetChange({ ...pet, position: value })

        }}>
      </MapInput>

      {/* <PetInputMap
        location={pet.location}
        onlocationChange={(location) => onPetChange({ ...pet, location })}
      /> */}

      <label>Pet Pictures</label>
      {/* <MultipleImageInput
        images={pet.pictures}
        onImagesChange={(pictures) => onPetChange({ ...pet, pictures })}
      /> */}

      <button type='submit'>{buttonLabel}</button>
    </form>
  );
};

export default PetForm;
