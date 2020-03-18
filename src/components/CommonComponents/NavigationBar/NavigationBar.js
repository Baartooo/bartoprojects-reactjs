import React from 'react';
import { NavLink } from "react-router-dom";
import DropdownToggleButton from '../DropdownNav/DropdownToggleButton';
import Logo from '../../../photos/logo.png';

import './NavigationBar.css';

const NavigationBar = (props) => {
    return (
        <header className='navbar'>
            <nav className='navbar-navigation'>
                <div className='navbar-logo'><NavLink exact to='/'><img src={Logo} className='navbar-logo-img' alt='barto-projects-logo'></img></NavLink></div>
                <div className='navbar-navigation-items'>
                    <ul>
                        <li><NavLink exact to='/' activeClassName='active-navigation-link'>start.</NavLink></li>
                        <li><NavLink exact to='/outdoor' activeClassName='active-navigation-link'>outdoor.</NavLink></li>
                        <li><NavLink exact to='/urban' activeClassName='active-navigation-link'>urban.</NavLink></li>
                        <li><NavLink exact to='/people' activeClassName='active-navigation-link'>people.</NavLink></li>
                        <li><NavLink exact to='/analog' activeClassName='active-navigation-link'>analog.</NavLink></li>
                        <li><NavLink exact to='/about' activeClassName='active-navigation-link'>about.</NavLink></li>
                    </ul>

                </div>
                <div className='dropDownToggleButtonDiv'>
                    <DropdownToggleButton click={props.dropdownClickHandler} />
                </div>
            </nav>
        </header>
    );
}

export default NavigationBar;