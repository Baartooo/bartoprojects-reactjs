import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../redux/lightbox/duck/actions';
import './Lightbox.css';
import { LeftArrow, RightArrow, CloseX } from './Buttons/Buttons';


import CampingPhoto from '../../../photos/outdoor/camping.jpg';
import LonelyTreePhoto from '../../../photos/outdoor/lonelyTree.jpg';
import CastlePhoto from '../../../photos/outdoor/castle.jpg';
import FieldPhoto from '../../../photos/outdoor/field.jpg';
import ChurchPhoto from '../../../photos/outdoor/fallChurch.jpg';
import RoadPhoto from '../../../photos/outdoor/fallRoad.jpg';


class Lightbox extends Component {

    closeLightboxAndResetIndex = () => {
        this.props.closeLightbox();
        this.props.resetIndex();
    }
    moveRight = () => {
        const { setCurrentImage, currentImageArray, currentImage, isOnLast, denyNext, allowPrev } = this.props;
        if (!isOnLast) {
            if (currentImageArray.indexOf(currentImage) + 1 === currentImageArray.length - 1) {
                denyNext();
            }
            if (!(currentImageArray.indexOf(currentImage) - 1 === 0)) {
                allowPrev();
            }
            setCurrentImage(currentImageArray[currentImageArray.indexOf(currentImage) + 1]);
        }
    }
    moveLeft = () => {
        const { setCurrentImage, currentImageArray, currentImage, isOnFirst, allowNext, denyPrev } = this.props;
        if (!isOnFirst) {
            if (currentImageArray.indexOf(currentImage) - 1 === 0) {
                denyPrev();
            }
            if (!(currentImageArray.indexOf(currentImage) + 1 === currentImageArray.length - 1)) {
                allowNext();
            }
            setCurrentImage(currentImageArray[currentImageArray.indexOf(currentImage) - 1]);
        }
    }

    render() {
        let lightboxWrapperClassName = 'lightbox-wrapper';

        if (this.props.isLightboxOpened) {
            lightboxWrapperClassName = 'lightbox-wrapper opened';
        }
        let leftArrow, rightArrow;

        if (!this.props.isOnFirst) {
            leftArrow = <LeftArrow onClick={this.moveLeft} />
        }
        if (!this.props.isOnLast) {
            rightArrow = <RightArrow onClick={this.moveRight} />
        }

        return (
            <div className={lightboxWrapperClassName}>

                <div className='lightbox-background' onClick={this.closeLightboxAndResetIndex} />
                <CloseX onClick={this.closeLightboxAndResetIndex} />
                {leftArrow}
                {rightArrow}
                <div className='lightbox-photo-wrapper'>
                    <img src={this.props.currentImage} alt='img' className='lightbox-photo' />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isLightboxOpened: state.lightbox.isLightboxOpened,
    currentImageArray: state.lightbox.currentImageArray,
    currentImage: state.lightbox.currentImage,
    isOnFirst: state.lightbox.isOnFirst,
    isOnLast: state.lightbox.isOnLast
});

const mapDispatchToProps = dispatch => ({
    closeLightbox: () => dispatch(actions.closeLightbox()),
    setCurrentImagesArray: (array) => dispatch(actions.setCurrentImagesArray(array)),
    setCurrentImage: (image) => dispatch(actions.setCurrentImage(image)),
    allowNext: () => dispatch(actions.allowNext()),
    denyNext: () => dispatch(actions.denyNext()),
    allowPrev: () => dispatch(actions.allowPrev()),
    denyPrev: () => dispatch(actions.denyPrev()),
    resetIndex: () => dispatch(actions.resetIndex())
});

export default connect(mapStateToProps, mapDispatchToProps)(Lightbox);