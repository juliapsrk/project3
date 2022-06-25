const PetSearchForm = ({ filters, onFiltersChange }) => {
  return (
    <form>
      <label htmlFor='input-type'>Type of Animal</label>
      <select
        id='input-type'
        value={filters.type}
        onChange={(event) =>
          onFiltersChange({ ...filters, type: event.target.value })
        }
      >
        <option value='dog'>Dog</option>
        <option value='cat'>Cat</option>
        <option value='rabbit'>Rabbit</option>
        <option value='bird'>Bird</option>
        <option value='reptile'>Reptile</option>
        <option value='fish'>Fish</option>
      </select>

      <label htmlFor='input-breed'>Breed</label>
      <select
        id='input-breed'
        value={filters.breed}
        onChange={(event) =>
          onFiltersChange({ ...filters, breed: event.target.value })
        }
      ></select>
    </form>
  );
};

export default PetSearchForm;
