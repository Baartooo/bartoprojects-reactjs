import types from './types';

const openLightbox = () => ({
    type: types.OPEN_LIGHTBOX
});
const closeLightbox = () => ({
    type: types.CLOSE_LIGHTBOX
});

export default {
    openLightbox,
    closeLightbox
}