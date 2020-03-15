import types from './types';

const openLightbox = () => ({
    type: types.OPEN_LIGHTBOX
});
const closeLightbox = () => ({
    type: types.CLOSE_LIGHTBOX
});
const setCurrentImagesArray = (currentArray) => ({
    type: types.SET_CURR_IMG_ARRAY,
    currentArray
});
const setCurrentImage = (currentImage) => ({
    type: types.SET_CURR_IMG,
    currentImage
});
const allowNext = () => ({
    type: types.ALLOW_NEXT
});
const denyNext = () => ({
    type: types.DENY_NEXT
});
const allowPrev = () => ({
    type: types.ALLOW_PREV
});
const denyPrev = () => ({
    type: types.DENY_PREV
});
const resetIndex = () => ({
    type: types.RESET_INDEX
});


export default {
    openLightbox,
    closeLightbox,
    setCurrentImagesArray,
    setCurrentImage,
    allowNext,
    denyNext,
    allowPrev,
    denyPrev,
    resetIndex
}