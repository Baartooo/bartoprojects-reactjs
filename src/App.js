import React, { Component } from 'react';
import './App.css';
import StartPage from './components/StartPage/StartPage';
import NavigationBar from './components/CommonComponents/NavigationBar/NavigationBar';
import DropdownNav from './components/CommonComponents/DropdownNav/DropdownNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './router/routes';
import Outdoor from './components/AlbumPage/Outdoor/Outdoor';
import Urban from './components/AlbumPage/Urban/Urban';
import People from './components/AlbumPage/People/People';
import Analog from './components/AlbumPage/Analog/Analog';
import Footer from './components/CommonComponents/Footer/Footer';




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
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
