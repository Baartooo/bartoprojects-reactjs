import React from 'react';
import '../Album/Album.css';
import Album from '../Album/Album';

import CampingPhoto from '../../../assets/photos/outdoor/camping.jpg';
import LonelyTreePhoto from '../../../assets/photos/outdoor/lonelyTree.jpg';
import CastlePhoto from '../../../assets/photos/outdoor/castle.jpg';
import MountainsView from '../../../assets/photos/outdoor/mountainsView.jpg';
import Mountains from '../../../assets/photos/outdoor/mountains.jpg';
import MountainsPath from '../../../assets/photos/outdoor/mountainsPath.jpg';
import MorningFogGlow from '../../../assets/photos/outdoor/morningFogGlow.jpg';
import MorningFogCentralTree from '../../../assets/photos/outdoor/morningFogCentralTree.jpg';
import MorningFog from '../../../assets/photos/outdoor/morningFog.jpg';

const images = [
  CampingPhoto,
  LonelyTreePhoto,
  CastlePhoto,
  MountainsView,
  Mountains,
  MountainsPath,
  MorningFogGlow,
  MorningFogCentralTree,
  MorningFog,
];

const Outdoor = () => (
  <main className="album-wrapper">
    <Album images={images} />
  </main>
);

export default Outdoor;
