import { combineReducers } from 'redux';
import facebookAuth from './fb_auth';
import videoList from './video_list';

const rootReducers = combineReducers({
    facebookAuth,
    videoList
});

export default rootReducers;