import React, { Component } from 'react';

import Lightbox from '../Lightbox/Lightbox';
import { connect } from 'react-redux';
import actions from '../../../redux/lightbox/duck/actions';

import './Outdoor.css';
import CampingPhoto from '../../../photos/outdoor/camping.jpg';
import LonelyTreePhoto from '../../../photos/outdoor/lonelyTree.jpg';
import CastlePhoto from '../../../photos/outdoor/castle.jpg';
import FieldPhoto from '../../../photos/outdoor/field.jpg';
import ChurchPhoto from '../../../photos/outdoor/fallChurch.jpg';
import RoadPhoto from '../../../photos/outdoor/fallRoad.jpg';

const images = [ChurchPhoto, RoadPhoto, FieldPhoto, CampingPhoto, LonelyTreePhoto, CastlePhoto];

class Outdoor extends Component {

    openLightbox = (index) => {
        this.props.openLightbox();
        this.props.setCurrentImagesArray(images);
        this.props.setCurrentImage(images[index]);
        if (index === images.length - 1) {
            this.props.denyNext();
        } else {
            this.props.allowNext();
        }
        if (index === 0) {
            this.props.denyPrev();
        } else {
            this.props.allowPrev();
        }

    }

    render() {
        return (
            <>
                <Lightbox />
                <div className='album-header'>Outdoor photos done by Bartosz Gajos &copy;</div>
                <div className='photos'>
                    {images.map((photo, index) => (
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
const mapDispatchToProps = dispatch => ({
    openLightbox: () => dispatch(actions.openLightbox()),
    setCurrentImagesArray: (array) => dispatch(actions.setCurrentImagesArray(array)),
    setCurrentImage: (image) => dispatch(actions.setCurrentImage(image)),
    allowNext: () => dispatch(actions.allowNext()),
    denyNext: () => dispatch(actions.denyNext()),
    allowPrev: () => dispatch(actions.allowPrev()),
    denyPrev: () => dispatch(actions.denyPrev()),
    resetIndex: () => dispatch(actions.resetIndex())
});

export default connect(mapStateToProps, mapDispatchToProps)(Outdoor);