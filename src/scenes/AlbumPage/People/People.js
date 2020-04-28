import React from 'react';

import './People.css';
import CampingPhoto from '../../../assets/photos/outdoor/camping.jpg';
import LonelyTreePhoto from '../../../assets/photos/outdoor/lonelyTree.jpg';
import CastlePhoto from '../../../assets/photos/outdoor/castle.jpg';
import Album from '../Album/Album';

const images = [CampingPhoto, LonelyTreePhoto, CastlePhoto];

const Outdoor = (props) => {
    return (
        <main className='album-wrapper'>
            <h1>People</h1>
            <Album images={images}/>


        </main>
    );
}

export default Outdoor;