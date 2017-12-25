import {SET_CURRENT_ROOM} from '../actions/index';

function rooms_reducer(state = '', action) {
    switch (action.type) {
        case SET_CURRENT_ROOM:
            return action.room;
        default:
            return state;
    }
}

export default rooms_reducer;