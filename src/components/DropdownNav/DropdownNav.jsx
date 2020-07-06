import React from 'react';
import { NavLink } from 'react-router-dom';
import './DropdownNav.css';
import PropTypes from 'prop-types';
import routes from '../../router/routes';

const DropdownNav = (props) => {
  const { isOpened, closeDropdown } = props;
  return (
    <header>
      <nav className={`${isOpened ? 'dropdown-navigation opened' : 'dropdown-navigation'}`}>
        <ul>
          <li><NavLink onClick={closeDropdown} exact activeClassName="active-nagivation-link" to={routes.start}>start.</NavLink></li>
          <li><NavLink onClick={closeDropdown} exact activeClassName="active-nagivation-link" to={routes.outdoor}>outdoor.</NavLink></li>
          <li><NavLink onClick={closeDropdown} exact activeClassName="active-nagivation-link" to={routes.urban}>urban.</NavLink></li>
          <li><NavLink onClick={closeDropdown} exact activeClassName="active-nagivation-link" to={routes.sports}>sports.</NavLink></li>
          <li><NavLink onClick={closeDropdown} exact activeClassName="active-nagivation-link" to={routes.analog}>analog.</NavLink></li>
          <li><NavLink onClick={closeDropdown} exact activeClassName="active-nagivation-link" to={routes.about}>about.</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

DropdownNav.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default DropdownNav;
