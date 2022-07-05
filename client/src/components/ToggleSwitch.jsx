import React from 'react';
import './ToggleSwitch.scss';

const ToggleSwitch = () => {
  return (
    <label className='switch'>
      <input type='checkbox' />
      <span classname='slider' />
    </label>
  );
};

export default ToggleSwitch;
