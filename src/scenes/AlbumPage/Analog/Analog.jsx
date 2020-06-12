import React from 'react';

import '../Album/Album.css';
import Album from '../Album/Album';
import Tunnel from '../../../assets/photos/analog/tunnel.jpg';
import BmxPhoto from '../../../assets/photos/analog/bmx.jpg';
import ParkingPhoto from '../../../assets/photos/analog/parking.jpg';
import DodgePhoto from '../../../assets/photos/analog/dodge.jpg';
import ShadowPeople from '../../../assets/photos/analog/shadowPeople.jpg';
import Anna from '../../../assets/photos/analog/anna.jpg';
import BushWhite from '../../../assets/photos/analog/bushWhite.jpg';
import BushYellow from '../../../assets/photos/analog/bushYellow.jpg';
import BushSunset from '../../../assets/photos/analog/bushSunset.jpg';
import TramPhoto from '../../../assets/photos/analog/tram.jpg';
import RailsPhoto from '../../../assets/photos/analog/rails.jpg';
import Opel from '../../../assets/photos/analog/opel.jpg';

const images = [
  Tunnel,
  BmxPhoto,
  ParkingPhoto,
  DodgePhoto,
  ShadowPeople,
  Anna,
  BushWhite,
  BushYellow,
  BushSunset,
  TramPhoto,
  RailsPhoto,
  Opel,
];

const Analog = () => (
  <main className="album-wrapper">
    <Album images={images} />
  </main>
);

export default Analog;
