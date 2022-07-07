const FormInput = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div>
      <label htmlFor={name}>{labelText || name}</label>
      <input type={type} value={value} name={name} onChange={handleChange} />
    </div>
  );
};

const FormTextArea = ({ name, labelText, value, handleChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-select'
      ></textarea>
    </div>
  );
};

const FormSelect = ({
  name,
  labelText,
  value,
  handleChange,
  optionValue1,
  optionValue2
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-select'
      >
        <option value={optionValue1}>{optionValue1}</option>
        <option value={optionValue2}>{optionValue2}</option>
      </select>
    </div>
  );
};

export { FormInput, FormTextArea, FormSelect };
