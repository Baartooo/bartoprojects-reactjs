import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './DropdownNav.css';


class DropdownNav extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav className='dropdown-navigation'>
                        <ul>
                            <li><Link to='/'>start.</Link></li>
                            <li><Link to='/'>outdoor.</Link></li>
                            <li><Link to='/'>urban.</Link></li>
                            <li><Link to='/'>people.</Link></li>
                            <li><Link to='/'>analog.</Link></li>
                            <li><Link to='/'>about.</Link></li>
                        </ul>
                    </nav>
                    
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
                </Router>
            </div>
        );
    }
}

export default DropdownNav;
