import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './DropdownNav.css';


class DropdownNav extends Component {

    render() {
        let dropdownClassName = 'dropdown-navigation';
        if (this.props.isOpened) {
            dropdownClassName = 'dropdown-navigation opened'
        }
        return (
            <header>
                <nav className={dropdownClassName}>
                    <ul>
                        <li><Link to='/'>start.</Link></li>
                        <li><Link to='/outdoor'>outdoor.</Link></li>
                        <li><Link to='/urban'>urban.</Link></li>
                        <li><Link to='/people'>people.</Link></li>
                        <li><Link to='/analog'>analog.</Link></li>
                        <li><Link to='/about'>about.</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default DropdownNav;
