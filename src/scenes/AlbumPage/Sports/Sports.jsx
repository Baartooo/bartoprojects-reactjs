import React from 'react';
import '../Album/Album.css';
import Album from '../Album/Album';

import Crooked from '../../../assets/photos/sports/maciekCrooked.jpg';
import RailRide from '../../../assets/photos/sports/patrykRailride.jpg';

const images = [
  Crooked,
  RailRide,
];

const Sports = () => (
  <main className="album-wrapper">
    <Album images={images} />
  </main>
);

export default Sports;
