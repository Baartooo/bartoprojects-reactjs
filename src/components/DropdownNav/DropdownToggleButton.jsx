import React from 'react';
import { FaBars } from 'react-icons/fa';
import './DropdownToggleButton.css';

const DropdownToggleButton = (props) => {
  const { click } = props;
  return (
    <button type="button" className="toggle-button" onClick={click}>
      <FaBars />
    </button>
  );
};

export default DropdownToggleButton;
