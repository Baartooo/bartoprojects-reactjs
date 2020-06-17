import React from 'react';
import '../Album/Album.css';
import Album from '../Album/Album';

import Building1 from '../../../assets/photos/urban/building1.jpg';
import Chimney from '../../../assets/photos/urban/chimney.jpg';
import Building2 from '../../../assets/photos/urban/building2.jpg';
import Balconies from '../../../assets/photos/urban/balconies.jpg';
import Cameras from '../../../assets/photos/urban/cameras.jpg';
import Wall from '../../../assets/photos/urban/wall.jpg';

const images = [
  Building1,
  Chimney,
  Building2,
  Balconies,
  Cameras,
  Wall,
];

const Outdoor = () => (
  <main className="album-wrapper">
    <Album images={images} />
  </main>
);

export default Outdoor;
