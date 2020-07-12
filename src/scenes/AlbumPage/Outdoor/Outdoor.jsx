import React from 'react';
import '../Album/Album.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
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

const images2 = gql`
  {
    category(where:{name: "outdoor"}) {
      name
      images {
        title, img{ url }, ordinalNumber, categoryName
      }
    }
  }
`;

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

const Outdoor = () => {
  const { loading, error, data } = useQuery(images2);

  // if (!loading) {
  //   console.log(data.category.images);
  // }
  //image.img.url
  return (
    <main className="album-wrapper">
      {loading
        ? ''
        : <Album images={data.category.images} />
      }
    </main>
  );
};

export default Outdoor;
