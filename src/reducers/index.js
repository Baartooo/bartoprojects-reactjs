import { combineReducers } from 'redux';
import lightboxReducer from './reducers';

export default combineReducers({
  lightbox: lightboxReducer,
});
