import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa'

import './DropdownToggleButton.css';



class DropdownToggleButton extends Component {
    render() {
        return (
            <button className='toggle-button' onClick={this.props.click}>
                <FaBars />
            </button>
        );
    }
}

export default DropdownToggleButton;