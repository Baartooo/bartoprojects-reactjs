import React, { Component } from 'react';
import './App.css';
import './style.css';
import Carousel from 'react-images';

const images = [{ source: 'photos/camping.jpg' }, { source: 'photos/castle.jpg' }, { source: 'photos/field.jpg' }];


class App extends Component {
  render() {
    return (
      <div>
        <Carousel views={images} />
      </div>
    );
  }
}



export default App;
