import types from './types';

const INITIAL_LIGHTBOX_STATE = {
    isLightboxOpened: false
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
        default:
            return state;
    }
}

export default lightboxReducer;