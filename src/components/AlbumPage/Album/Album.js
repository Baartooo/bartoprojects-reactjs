import React from 'react';

import Lightbox from '../Lightbox/Lightbox';
import { connect } from 'react-redux';
import actions from '../../../redux/lightbox/duck/actions';

import './Album.css';

const Album = (props) => {

    const images = props.images;

    const openLightbox = (index) => {
        props.setCurrentImagesArray(images);
        props.setCurrentImage(images[index]);
        props.openLightbox();
        if (index === images.length - 1) {
            props.denyNext();
        } else {
            props.allowNext();
        }
        if (index === 0) {
            props.denyPrev();
        } else {
            props.allowPrev();
        }

    }
    return (
        <div>
            <Lightbox />
            <div className='photos'>
                {images.map((photo, index) => (
                    <div key={index} className='single-photo' onClick={() => openLightbox(index)}>
                        <img src={photo} className='single-img' alt=''></img>
                    </div>
                ))}
            </div>
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Album);