import React from 'react';
import { FaBars } from 'react-icons/fa'

import './DropdownToggleButton.css';



const DropdownToggleButton = (props) => {

    return (
        <button className='toggle-button' onClick={props.click}>
            <FaBars />
        </button>
    );
}

export default DropdownToggleButton;