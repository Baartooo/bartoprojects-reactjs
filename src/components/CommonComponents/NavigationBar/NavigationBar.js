import React, { Component } from 'react';
import { Link } from "react-router-dom";
import DropdownToggleButton from '../DropdownNav/DropdownToggleButton';

import './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return (
            <header className='navbar'>
                <nav className='navbar-navigation'>
                    <div className='navbar-logo'><Link to='/'>barto projects</Link></div>
                    <div className='navbar-spacer' />
                    <div className='navbar-navigation-items'>
                        <ul>
                            <li><Link to='/'>start.</Link></li>
                            <li><Link to='/outdoor'>outdoor.</Link></li>
                            <li><Link to='/urban'>urban.</Link></li>
                            <li><Link to='/people'>people.</Link></li>
                            <li><Link to='/analog'>analog.</Link></li>
                            <li><Link to='/about'>about.</Link></li>
                        </ul>

                    </div>
                    <div className='dropDownToggleButtonDiv'>
                        <DropdownToggleButton click={this.props.dropdownClickHandler} />
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavigationBar;