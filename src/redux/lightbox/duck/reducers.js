import types from './types';

const INITIAL_LIGHTBOX_STATE = {
    isLightboxOpened: false,
    currentImageArray: ["/static/media/fallChurch.97c0cbea.jpg", "/static/media/fallRoad.5f34838d.jpg", "/static/media/field.652f058e.jpg", "/static/media/camping.3a2720ff.jpg", "/static/media/lonelyTree.6c8512f2.jpg", "/static/media/castle.da1f4614.jpg"],
    currentImage: '/static/media/fallRoad.5f34838d.jpg'
}

const lightboxReducer = (state = INITIAL_LIGHTBOX_STATE, action) => {
    switch (action.type) {
        case types.OPEN_LIGHTBOX:
            return {
                ...state,
                isLightboxOpened: true
            }
        case types.CLOSE_LIGHTBOX:
            return {
                ...state,
                isLightboxOpened: false
            }
        case types.SET_CURR_IMG_ARRAY:
            return {
                ...state,
                currentImageArray: action.currentArray
            }
        case types.SET_CURR_IMG:
            return {
                ...state,
                currentImage: action.currentImage
            }
        default:
            return state;
    }
}

export default lightboxReducer;