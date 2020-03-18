import React from 'react';
import { connect } from 'react-redux';
import actions from '../../../redux/lightbox/duck/actions';
import './Lightbox.css';
import { LeftArrow, RightArrow, CloseX } from './Buttons/Buttons';

const Lightbox = (props) => {

    const closeLightboxAndResetIndex = () => {
        props.closeLightbox();
        props.resetIndex();
    }
    const moveRight = () => {
        const { setCurrentImage, currentImageArray, currentImage, isOnLast, denyNext, allowPrev } = props;
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
    const moveLeft = () => {
        const { setCurrentImage, currentImageArray, currentImage, isOnFirst, allowNext, denyPrev } = props;
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

    let lightboxWrapperClassName = 'lightbox-wrapper';

    if (props.isLightboxOpened) {
        lightboxWrapperClassName = 'lightbox-wrapper opened';
    }
    let leftArrow, rightArrow;

    if (!props.isOnFirst) {
        leftArrow = <LeftArrow onClick={moveLeft} />
    }
    if (!props.isOnLast) {
        rightArrow = <RightArrow onClick={moveRight} />
    }

    return (
        <div className={lightboxWrapperClassName}>

            <div className='lightbox-background' onClick={closeLightboxAndResetIndex} />
            <CloseX onClick={closeLightboxAndResetIndex} />
            {leftArrow}
            {rightArrow}
            <div className='lightbox-photo-wrapper'>
                <img src={props.currentImage} alt='img' className='lightbox-photo' />
            </div>
        </div>
    );

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