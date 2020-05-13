import React from 'react';

import '../Album/Album.css';
import Album from '../Album/Album';
import BmxPhoto from '../../../assets/photos/analog/bmx.jpg';
import GraffittiPhoto from '../../../assets/photos/analog/graffitti.JPG';
import ParkingPhoto from '../../../assets/photos/analog/parking.jpg';
import DodgePhoto from '../../../assets/photos/analog/dodge.jpg';
import RailsPhoto from '../../../assets/photos/analog/rails.jpg';
import TramPhoto from '../../../assets/photos/analog/tram.jpg';

const images = [BmxPhoto, GraffittiPhoto, ParkingPhoto, DodgePhoto, RailsPhoto, TramPhoto];

const Outdoor = (props) => {
    return (
        <main className='album-wrapper'>
            <Album images={images}/>


        </main>
    );
}

export default Outdoor;