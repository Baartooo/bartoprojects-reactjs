import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DropdownToggleButton from '../DropdownNav/DropdownToggleButton';

import './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return (
            <header className='navbar'>
                <Router>
                    <nav className='navbar-navigation'>
                        <div className='navbar-logo'><Link to='/'>barto projects</Link></div>
                        <div className='navbar-spacer' />
                        <div className='navbar-navigation-items'>
                            <ul>
                                <li><Link to='/'>start.</Link></li>
                                <li><Link to='/'>outdoor.</Link></li>
                                <li><Link to='/'>urban.</Link></li>
                                <li><Link to='/'>people.</Link></li>
                                <li><Link to='/'>analog.</Link></li>
                                <li><Link to='/'>about.</Link></li>
                            </ul>
                            <Switch>
                                <Route path="/">
                                    {/* <About /> */}
                                </Route>
                                <Route path="/">
                                    {/* <Topics /> */}
                                </Route>
                                <Route path="/">
                                    {/* <Home /> */}
                                </Route>
                            </Switch>
                        </div>
                        <div>
                            <DropdownToggleButton click={this.props.dropdownClickHandler}/>
                        </div>
                    </nav>
                </Router>
            </header>
        );
    }
}

export default NavigationBar;