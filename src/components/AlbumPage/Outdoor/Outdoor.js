import React, { Component } from 'react';

import Lightbox from '../Lightbox/Lightbox';
import { connect } from 'react-redux';

import './Outdoor.css';
import CampingPhoto from '../../../photos/outdoor/camping.jpg';
import LonelyTreePhoto from '../../../photos/outdoor/lonelyTree.jpg';
import CastlePhoto from '../../../photos/outdoor/castle.jpg';
import FieldPhoto from '../../../photos/outdoor/field.jpg';
import ChurchPhoto from '../../../photos/outdoor/fallChurch.jpg';
import RoadPhoto from '../../../photos/outdoor/fallRoad.jpg';

class Outdoor extends Component {

    state = {
        isLightboxOpened: false,
        currentLightboxImage: undefined,
        images: [ChurchPhoto, RoadPhoto, FieldPhoto, CampingPhoto, LonelyTreePhoto, CastlePhoto]
    };

    openLightbox = (index) => {
        this.setState({
            currentLightboxImage: index,
            isLightboxOpened: true
        })
    }

    closeLightbox = () => {
        this.setState({
            isLightboxOpened: false,
            currentImage: undefined
        })
    }


    render() {
        let lightbox;
        if (this.state.isLightboxOpened) {
            lightbox = <Lightbox isOpened={this.state.isLightboxOpened} currentImage={this.state.currentLightboxImage} />
        }
        return (
            <>
                {lightbox}
                <div className='album-header'>Outdoor photos done by Bartosz Gajos &copy;</div>
                <div className='photos'>
                    {this.state.images.map((photo, index) => (
                        <div key={index} className='single-photo' onClick={() => this.openLightbox(index)}>
                            <img src={photo} className='single-img' alt=''></img>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    isLightboxOpened: state.lightbox.isLightboxOpened
})

export default connect(mapStateToProps, {}) (Outdoor);