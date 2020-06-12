import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  closeLightbox,
  setCurrentImage,
  allowNext,
  denyNext,
  allowPrev,
  denyPrev,
  resetIndex,

} from '../../../actions/actions';
import './Lightbox.css';
import { LeftArrow, RightArrow, CloseX } from './Buttons/Buttons';

const Lightbox = () => {
  const dispatch = useDispatch();

  const currentImageArray = useSelector((state) => state.lightbox.currentImageArray);
  const currentImage = useSelector((state) => state.lightbox.currentImage);
  const isOnFirst = useSelector((state) => state.lightbox.isOnFirst);
  const isOnLast = useSelector((state) => state.lightbox.isOnLast);

  const closeLightboxAndResetIndex = () => {
    dispatch(closeLightbox());
    dispatch(resetIndex());
  };
  const moveRight = () => {
    if (!isOnLast) {
      if (currentImageArray.indexOf(currentImage) + 1 === currentImageArray.length - 1) {
        dispatch(denyNext());
      }
      if (!(currentImageArray.indexOf(currentImage) - 1 === 0)) {
        dispatch(allowPrev());
      }
      dispatch(setCurrentImage(currentImageArray[currentImageArray.indexOf(currentImage) + 1]));
    }
  };
  const moveLeft = () => {
    if (!isOnFirst) {
      if (currentImageArray.indexOf(currentImage) - 1 === 0) {
        dispatch(denyPrev());
      }
      if (!(currentImageArray.indexOf(currentImage) + 1 === currentImageArray.length - 1)) {
        dispatch(allowNext());
      }
      dispatch(setCurrentImage(currentImageArray[currentImageArray.indexOf(currentImage) - 1]));
    }
  };
  const onKeyPress = (e) => {
    switch (e.code) {
      case 'ArrowRight':
        moveRight();
        break;
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'Escape':
        closeLightboxAndResetIndex();
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);
    return () => document.removeEventListener('keydown', onKeyPress);
  });

  return (
    <div className="lightbox-wrapper">
      <div className="lightbox-background" onClick={ closeLightboxAndResetIndex } />
      <CloseX onClick={closeLightboxAndResetIndex} />
      {!isOnFirst ? <LeftArrow onClick={moveLeft} /> : ''}
      {!isOnLast ? <RightArrow onClick={moveRight} /> : ''}

      <div className="lightbox-photo-wrapper">
        <img src={currentImage} alt="img" className="lightbox-photo" />
      </div>
    </div>
  );
};
export default Lightbox;
