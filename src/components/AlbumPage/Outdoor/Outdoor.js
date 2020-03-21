import React from 'react';

import './Outdoor.css';
import CampingPhoto from '../../../photos/outdoor/camping.jpg';
import LonelyTreePhoto from '../../../photos/outdoor/lonelyTree.jpg';
import CastlePhoto from '../../../photos/outdoor/castle.jpg';
import FieldPhoto from '../../../photos/outdoor/field.jpg';
import ChurchPhoto from '../../../photos/outdoor/fallChurch.jpg';
import RoadPhoto from '../../../photos/outdoor/fallRoad.jpg';
import Album from '../Album/Album';

const images = [ChurchPhoto, RoadPhoto, FieldPhoto, CampingPhoto, LonelyTreePhoto, CastlePhoto];

const Outdoor = (props) => {
    return (
        <main className='album-wrapper'>

            
            <Album images={images}/>


        </main>
    );
}

export default Outdoor;