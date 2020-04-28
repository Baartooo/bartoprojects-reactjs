import React from 'react';
import Lightbox from '../Lightbox/Lightbox';
import { useSelector, useDispatch } from 'react-redux';
import {
    openLightbox,
    setCurrentImage,
    setCurrentImagesArray,
    allowNext,
    denyNext,
    allowPrev,
    denyPrev,
} from '../../../actions/actions';
import './Album.css';

const Album = (props) => {
    const dispatch = useDispatch();
    const isLightboxOpened = useSelector(state => state.lightbox.isLightboxOpened)

    const onPhotoClick = (index) => {
        dispatch(setCurrentImagesArray(props.images));
        dispatch(setCurrentImage(props.images[index]));
        dispatch(openLightbox());
        if (index === props.images.length - 1) {
            dispatch(denyNext());
        } else {
            dispatch(allowNext());
        }
        if (index === 0) {
            dispatch(denyPrev());
        } else {
            dispatch(allowPrev());
        }

    }
    return (
        <div>
            {isLightboxOpened ? <Lightbox /> : ''}
            <div className='photos'>
                {props.images.map((photo, index) => (
                    <div key={index} className='single-photo' onClick={() => onPhotoClick(index)}>
                        <img src={photo} className='single-img' alt=''></img>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Album;