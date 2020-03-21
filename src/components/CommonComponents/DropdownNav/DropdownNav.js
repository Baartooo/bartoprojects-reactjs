import React from 'react';
import { NavLink } from "react-router-dom";
import './DropdownNav.css';
import routes from '../../../router/routes';


const DropdownNav = (props) => {

    let dropdownClassName = 'dropdown-navigation';
    if (props.isOpened) {
        dropdownClassName = 'dropdown-navigation opened'
    }
    return (
        <header>
            <nav className={dropdownClassName}>
                <ul>
                    <li><NavLink onClick={props.closeDropdown} exact activeClassName='active-nagivation-link' to={routes.start}>start.</NavLink></li>
                    <li><NavLink onClick={props.closeDropdown} exact activeClassName='active-nagivation-link' to={routes.outdoor}>outdoor.</NavLink></li>
                    <li><NavLink onClick={props.closeDropdown} exact activeClassName='active-nagivation-link' to={routes.urban}>urban.</NavLink></li>
                    <li><NavLink onClick={props.closeDropdown} exact activeClassName='active-nagivation-link' to={routes.people}>people.</NavLink></li>
                    <li><NavLink onClick={props.closeDropdown} exact activeClassName='active-nagivation-link' to={routes.analog}>analog.</NavLink></li>
                    <li><NavLink onClick={props.closeDropdown} exact activeClassName='active-nagivation-link' to={routes.about}>about.</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default DropdownNav;
