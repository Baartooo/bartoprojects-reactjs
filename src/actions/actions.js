import types from './types/types';

export const openLightbox = () => ({
  type: types.OPEN_LIGHTBOX,
});
export const closeLightbox = () => ({
  type: types.CLOSE_LIGHTBOX,
});
export const setCurrentImagesArray = (currentArray) => ({
  type: types.SET_CURR_IMG_ARRAY,
  currentArray,
});
export const setCurrentImage = (currentImage) => ({
  type: types.SET_CURR_IMG,
  currentImage,
});
export const allowNext = () => ({
  type: types.ALLOW_NEXT,
});
export const denyNext = () => ({
  type: types.DENY_NEXT,
});
export const allowPrev = () => ({
  type: types.ALLOW_PREV,
});
export const denyPrev = () => ({
  type: types.DENY_PREV,
});
export const resetIndex = () => ({
  type: types.RESET_INDEX,
});
