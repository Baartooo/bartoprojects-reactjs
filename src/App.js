import React, { Component } from 'react';
import './App.css';
import StartPage from './components/StartPage/StartPage'
import NavigationBar from './components/CommonComponents/NavigationBar/NavigationBar';
import DropdownNav from './components/CommonComponents/DropdownNav/DropdownNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Album from './components/AlbumPage/Album';




class App extends Component {
  state = {
    isDropdownOpened: false
  }

  dropdownToggleClickHandler = () => {
    this.setState((prevState) => {
      return { isDropdownOpened: !prevState.isDropdownOpened };
    });
  };

  render() {
    return (
      <Router>
        <div className='app'>
          <NavigationBar dropdownClickHandler={this.dropdownToggleClickHandler} />
          <DropdownNav isOpened={this.state.isDropdownOpened} />
          <Switch>
            <Route path='/' exact component={StartPage} />
            <Route path='/outdoor' exact component={Album} />
            <Route path='/urban' exact component={Album} />
            <Route path='/people' exact component={StartPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
