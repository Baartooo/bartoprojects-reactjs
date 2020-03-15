import { combineReducers } from 'redux';
import lightboxReducer from './redux/lightbox/duck'

const rootReducer = combineReducers({
    lightbox: lightboxReducer
})

export default rootReducer;