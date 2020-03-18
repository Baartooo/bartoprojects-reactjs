import React from 'react';
import { NavLink } from "react-router-dom";

import './DropdownNav.css';


const DropdownNav = (props) => {

    let dropdownClassName = 'dropdown-navigation';
    if (props.isOpened) {
        dropdownClassName = 'dropdown-navigation opened'
    }
    return (
        <header>
            <nav className={dropdownClassName}>
                <ul>
                    <li><NavLink exact activeClassName='active-nagivation-link' to='/'>start.</NavLink></li>
                    <li><NavLink exact activeClassName='active-nagivation-link' to='/outdoor'>outdoor.</NavLink></li>
                    <li><NavLink exact activeClassName='active-nagivation-link' to='/urban'>urban.</NavLink></li>
                    <li><NavLink exact activeClassName='active-nagivation-link' to='/people'>people.</NavLink></li>
                    <li><NavLink exact activeClassName='active-nagivation-link' to='/analog'>analog.</NavLink></li>
                    <li><NavLink exact activeClassName='active-nagivation-link' to='/about'>about.</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default DropdownNav;
