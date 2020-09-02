import React, {useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import DropdownToggleButton from '../DropdownNav/DropdownToggleButton';
import Logo from '../../assets/img/logo.png';
import routes from '../../router/routes';
import gsap from 'gsap';

import './NavigationBar.css';

const NavigationBar = (props) => {
    const {dropdownClickHandler} = props;
    const items = useRef(null);

    useEffect(() => {
        const {children} = items.current;

        gsap.set(children, {autoAlpha: 0});

        gsap.fromTo(children, {
            y: '-=50',
        }, {
            y: 0,
            autoAlpha: 1,
            stagger: 0.1,
            ease: 'back',
        });

        return () => {
            gsap.fromTo(children, {
                y: 0,
                autoAlpha: 1,
                stagger: 0.1,
                ease: 'back',
            }, {
                y: '-=50',
                autoAlpha: 0,
            });
        }
    })

    return (
        <header className="navbar">
            <nav className="navbar-navigation">
                <div className="navbar-logo">
                    <NavLink exact to="/">
                        <img src={Logo} className="navbar-logo-img" alt="barto-projects-logo"/>
                    </NavLink>
                </div>
                <div className="navbar-navigation-items">
                    <ul ref={items}>
                        <li><NavLink exact to={routes.start} activeClassName="active-navigation-link">start.</NavLink>
                        </li>
                        <li><NavLink exact to={routes.outdoor}
                                     activeClassName="active-navigation-link">outdoor.</NavLink></li>
                        <li><NavLink exact to={routes.urban} activeClassName="active-navigation-link">urban.</NavLink>
                        </li>
                        <li><NavLink exact to={routes.sports} activeClassName="active-navigation-link">sports.</NavLink>
                        </li>
                        <li><NavLink exact to={routes.analog} activeClassName="active-navigation-link">analog.</NavLink>
                        </li>
                        <li><NavLink exact to={routes.about} activeClassName="active-navigation-link">about.</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="dropDownToggleButtonDiv">
                    <DropdownToggleButton click={dropdownClickHandler}/>
                </div>
            </nav>
        </header>
    );
};

NavigationBar.propTypes = {
    dropdownClickHandler: PropTypes.func.isRequired,
};

export default NavigationBar;
