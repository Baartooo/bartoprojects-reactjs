import React, { Component } from 'react';

import './Outdoor.css';
import CampingPhoto from '../../../photos/outdoor/camping.jpg';
// import CastlePhoto from '../../../photos/outdoor/castle.jpg';
// import MountainsPhoto from '../../../photos/outdoor/mountains.jpg';
// import FieldPhoto from '../../../photos/outdoor/field.jpg';
// import PlaneViewPhoto from '../../../photos/outdoor/planeView.jpg';
// import StormPhoto from '../../../photos/outdoor/storm1.JPG';

class Outdoor extends Component {
    
    render() {
        const images = [CampingPhoto, CampingPhoto, CampingPhoto, CampingPhoto, CampingPhoto, CampingPhoto];

        return (
            <>
                <div className='album-header'>Outdoor photos done by Bartosz Gajos &copy;</div>
                <div className='photos'>
                    {images.map(photo => (
                        <div className='single-photo'>
                            <img src={photo} className='single-img' alt=''></img>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Outdoor;