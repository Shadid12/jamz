import {SET_ROOMS} from '../actions/index';

function rooms_reducer(state = [], action) {
    switch (action.type) {
        case SET_ROOMS:
            return action.rooms;
        default:
            return state;
    }
}

export default rooms_reducer;