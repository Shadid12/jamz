import { combineReducers } from 'redux';
import facebookAuth from './fb_auth';
import videoList from './video_list';
import rooms_reducer  from './set_rooms';

const rootReducers = combineReducers({
    facebookAuth,
    videoList,
    rooms_reducer
});

export default rootReducers;