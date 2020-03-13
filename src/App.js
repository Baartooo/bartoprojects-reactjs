import React, { Component } from 'react';

import './App.css';
import StartPage from './components/StartPage/StartPage'
import NavigationBar from './components/CommonComponents/NavigationBar/NavigationBar';
import DropdownNav from './components/CommonComponents/DropdownNav/DropdownNav';


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
      <div className='app'>
        <NavigationBar dropdownClickHandler={this.dropdownToggleClickHandler}/>
        <DropdownNav isOpened={this.state.isDropdownOpened}/>
        <StartPage />
      </div>
    );
  }
}

export default App;
