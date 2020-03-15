import types from './types';

const openLightbox = () => ({
    type: types.OPEN_LIGHTBOX
});
const closeLightbox = () => ({
    type: types.CLOSE_LIGHTBOX
});
const setCurrentImagesArray=(currentArray)=>({
    type: types.SET_CURR_IMG_ARRAY,
    currentArray
});
const setCurrentImage=(currentImage)=>({
    type: types.SET_CURR_IMG,
    currentImage
})

export default {
    openLightbox,
    closeLightbox,
    setCurrentImagesArray,
    setCurrentImage
}