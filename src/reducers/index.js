import { combineReducers } from 'redux';
import facebookAuth from './fb_auth';
import videoList from './video_list';
import rooms_reducer  from './set_rooms';
import current_room_reducer  from './set_current_room';

const rootReducers = combineReducers({
    facebookAuth,
    videoList,
    rooms_reducer,
    current_room_reducer
});

export default rootReducers;