import React from 'react';
import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './DropdownToggleButton.css';

const DropdownToggleButton = (props) => {
  const { click } = props;
  return (
    <button type="button" className="toggle-button" onClick={click}>
      <FaBars />
    </button>
  );
};

DropdownToggleButton.propTypes = {
  click: PropTypes.func.isRequired,
};

export default DropdownToggleButton;
