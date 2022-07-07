const PetSearch = ({ filters, onFiltersChange }) => {
  return (
    <form>
      <label htmlFor="input-type">Type</label>
      <select
        id="input-type"
        value={filters.type}
        onChange={(event) =>
          onFiltersChange({ ...filters, type: event.target.value })
        }
      >
        <option value="">Select Type</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>

      <label htmlFor="input-gender">Gender</label>
      <select
        id="input-gender"
        value={filters.gender}
        onChange={(event) =>
          onFiltersChange({ ...filters, gender: event.target.value })
        }
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label htmlFor="input-age">Maximum Pet Age</label>
      <input
        id="input-age"
        type="number"
        min={0}
        placeholder="Maximum Age"
        value={filters.maximumAge}
        onChange={(event) =>
          onFiltersChange({
            ...filters,
            maximumAge: event.target.valueAsNumber
          })
        }
      />
    </form>
  );
};

export default PetSearch;