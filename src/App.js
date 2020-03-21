import React, { Component } from 'react';
import './App.css';
import StartPage from './components/StartPage/StartPage'
import NavigationBar from './components/CommonComponents/NavigationBar/NavigationBar';
import DropdownNav from './components/CommonComponents/DropdownNav/DropdownNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Album from './components/AlbumPage/Album';
import routes from './router/routes';




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
          <DropdownNav isOpened={this.state.isDropdownOpened} closeDropdown={this.closeDropdown}/>
          <Switch>
            <Route path={routes.start} exact component={StartPage} />
            <Route path={routes.outdoor} exact component={Album} />
            <Route path={routes.urban} exact component={Album} />
            <Route path={routes.people} exact component={Album} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
