import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Lightbox from '../Lightbox/Lightbox';
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const { images } = props;

  const dispatch = useDispatch();
  const isLightboxOpened = useSelector((state) => state.lightbox.isLightboxOpened);

  const onPhotoClick = (index) => {
    dispatch(setCurrentImagesArray(images));
    dispatch(setCurrentImage(images[index]));
    dispatch(openLightbox());
    if (index === images.length - 1) {
      dispatch(denyNext());
    } else {
      dispatch(allowNext());
    }
    if (index === 0) {
      dispatch(denyPrev());
    } else {
      dispatch(allowPrev());
    }
  };
  return (
    <div>
      {isLightboxOpened ? <Lightbox /> : ''}
      <div className="photos">
        {images.map((photo, index) => (
          <div
            key={index}
            className='single-photo'
            onClick={() => onPhotoClick(index)}
            onKeyPress={() => onPhotoClick(index)}>
            <img
              src={photo}
              className={`single-img img-${imageLoaded ? 'visible' : 'hidden'}`}
              alt=""
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;