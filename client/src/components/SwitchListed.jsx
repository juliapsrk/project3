import React from 'react';
import './ToggleSwitch.scss';

const SwitchListed = ({ isOn, handleToggle, onColor }) => {
  return (
    <label style={{ background: isOn && onColor }} className='react-switch'>
      <input
        checked={isOn}
        onChange={handleToggle}
        className='react-switch-checkbox'
        type='checkbox'
      />
      <div className='react-switch-button' />
      <div className='react-switch-labels'>
        <span>unlisted</span>
        <span>listed</span>
      </div>
    </label>
  );
};

export default SwitchListed;
