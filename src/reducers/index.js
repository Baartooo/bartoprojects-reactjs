import lightboxReducer from './reducers';
import { combineReducers } from 'redux';

export default combineReducers({
    lightbox: lightboxReducer
})
