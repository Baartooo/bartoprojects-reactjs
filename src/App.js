import React, { Component } from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './App.css';
import StartPage from './components/StartPage/StartPage'
import NavigationBar from './components/CommonComponents/NavigationBar/NavigationBar';
import DropdownNav from './components/CommonComponents/DropdownNav/DropdownNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Album from './components/AlbumPage/Album';


const initialLightboxState = {
  isLightboxOpened: false
}
function lightbox(state = initialLightboxState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
const store = createStore(lightbox, composeWithDevTools());
window.store = store;




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
