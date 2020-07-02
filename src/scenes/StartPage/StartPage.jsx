import React from 'react';
import './StartPage.css';
import backgroundImage from '../../assets/img/startPageBackground.jpg';

const StartPage = () => (
  <main className="startPageWrapper">
    <img
      className="background-image"
      src={backgroundImage}
      alt="background"
    />
  </main>
);

export default StartPage;
