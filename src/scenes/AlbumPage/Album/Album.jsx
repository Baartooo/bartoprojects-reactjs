import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Lightbox from '../Lightbox/Lightbox';
import Image from './Image/Image';
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
  const { images } = props;
  const sortedImages = images.sort((img1, img2) => {
    return img1.ordinalNumber - img2.ordinalNumber;
  });

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
        {sortedImages.map((image, index) => (
          <div
            key={index}
            className='single-photo'
            onClick={() => onPhotoClick(index)}
            onKeyPress={() => onPhotoClick(index)}>
            <Image source={image.img.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Album.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Album;
