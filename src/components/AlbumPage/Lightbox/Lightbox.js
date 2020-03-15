import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../redux/lightbox/duck/actions';

import CampingPhoto from '../../../photos/outdoor/camping.jpg';
import LonelyTreePhoto from '../../../photos/outdoor/lonelyTree.jpg';
import CastlePhoto from '../../../photos/outdoor/castle.jpg';
import FieldPhoto from '../../../photos/outdoor/field.jpg';
import ChurchPhoto from '../../../photos/outdoor/fallChurch.jpg';
import RoadPhoto from '../../../photos/outdoor/fallRoad.jpg';

import './Lightbox.css';

class Lightbox extends Component {


    render() {
        let lightboxWrapperClassName = 'lightbox-wrapper';
        let currentImageIndex = this.props.currentImageArray.indexOf(this.props.currentImage);

        if (this.props.isLightboxOpened) {
            lightboxWrapperClassName = 'lightbox-wrapper opened';
        }

        return (
            <div className={lightboxWrapperClassName}>

                <div className='lightbox-background' onClick={this.props.closeLightbox} />
                <div className='lightbox-photo-wrapper'>
                    <img src={this.props.currentImage} alt='dsada' className='lightbox-photo' />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isLightboxOpened: state.lightbox.isLightboxOpened,
    currentImageArray: state.lightbox.currentImageArray,
    currentImage: state.lightbox.currentImage
});

const mapDispatchToProps = dispatch => ({
    closeLightbox: () => dispatch(actions.closeLightbox())
});

export default connect(mapStateToProps, mapDispatchToProps)(Lightbox);