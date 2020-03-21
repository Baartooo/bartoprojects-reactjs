import React from 'react';

import './Analog.css';
import Album from '../Album/Album';
import BmxPhoto from '../../../photos/analog/bmx.jpg';
import GraffittiPhoto from '../../../photos/analog/graffitti.JPG';
import ParkingPhoto from '../../../photos/analog/parking.jpg';
import DodgePhoto from '../../../photos/analog/dodge.jpg';
import RailsPhoto from '../../../photos/analog/rails.jpg';
import TramPhoto from '../../../photos/analog/tram.jpg';

const images = [BmxPhoto, GraffittiPhoto, ParkingPhoto, DodgePhoto, RailsPhoto, TramPhoto];

const Outdoor = (props) => {
    return (
        <main className='album-wrapper'>
            <Album images={images}/>


        </main>
    );
}

export default Outdoor;