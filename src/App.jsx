import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartPage from './scenes/StartPage/StartPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import DropdownNav from './components/DropdownNav/DropdownNav';
import Footer from './components/Footer/Footer';
import routes from './router/routes';
import Outdoor from './scenes/AlbumPage/Outdoor/Outdoor';
import Urban from './scenes/AlbumPage/Urban/Urban';
import Sports from './scenes/AlbumPage/Sports/Sports';
import Analog from './scenes/AlbumPage/Analog/Analog';
import About from './scenes/About/About';

const App = () => {
  const [isDropdownOpened, setDropdownState] = useState(false);

  const dropdownToggleClickHandler = () => {
    setDropdownState(!isDropdownOpened);
  };
  const closeDropdown = () => {
    setDropdownState(false);
  };

  return (
    <Router>
      <div className="app">
        <NavigationBar dropdownClickHandler={dropdownToggleClickHandler} />
        <DropdownNav isOpened={isDropdownOpened} closeDropdown={closeDropdown} />
        <Switch>
          <Route path={routes.start} exact component={StartPage} />
          <Route path={routes.outdoor} exact component={Outdoor} />
          <Route path={routes.urban} exact component={Urban} />
          <Route path={routes.sports} exact component={Sports} />
          <Route path={routes.analog} exact component={Analog} />
          <Route path={routes.about} exact component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
