import types from '../actions/types/types';

const INITIAL_LIGHTBOX_STATE = {
    isLightboxOpened: false,
    currentImageArray: undefined,
    currentImage: undefined,
    isOnFirst: false,
    isOnLast: false,
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
                isLightboxOpened: false,
                currentImageArray: undefined,
                currentImage: undefined
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
        case types.ALLOW_NEXT:
            return {
                ...state,
                isOnLast: false
            }
        case types.DENY_NEXT:
            return {
                ...state,
                isOnLast: true
            }
        case types.ALLOW_PREV:
            return {
                ...state,
                isOnFirst: false
            }
        case types.DENY_PREV:
            return {
                ...state,
                isOnFirst: true
            }
        case types.RESET_INDEX:
            return {
                ...state,
                isOnFirst: false,
                isOnLast: false
            }
        default:
            return state;
    }
}

export default lightboxReducer;