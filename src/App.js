import React, { Component } from 'react';
import './App.css';
import StartPage from './scenes/StartPage/StartPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import DropdownNav from './components/DropdownNav/DropdownNav';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './router/routes';
import Outdoor from './scenes/AlbumPage/Outdoor/Outdoor';
import Urban from './scenes/AlbumPage/Urban/Urban';
import People from './scenes/AlbumPage/People/People';
import Analog from './scenes/AlbumPage/Analog/Analog';
import About from './scenes/About/About';




class App extends Component {
  state = {
    isDropdownOpened: false
  }

  dropdownToggleClickHandler = () => {
    this.setState((prevState) => {
      return { isDropdownOpened: !prevState.isDropdownOpened };
    });
  };
  closeDropdown = () => {
    this.setState(() => {
      return { isDropdownOpened: false }
    })
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <NavigationBar dropdownClickHandler={this.dropdownToggleClickHandler} />
          <DropdownNav isOpened={this.state.isDropdownOpened} closeDropdown={this.closeDropdown} />
          <Switch>
            <Route path={routes.start} exact component={StartPage} />
            <Route path={routes.outdoor} exact component={Outdoor} />
            <Route path={routes.urban} exact component={Urban} />
            <Route path={routes.people} exact component={People} />
            <Route path={routes.analog} exact component={Analog} />
            <Route path={routes.about} exact component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
