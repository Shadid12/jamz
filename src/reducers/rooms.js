import {ROOMS} from "../actions/index";

function rooms(state = null, action) {
    switch (action.type) {
        case ROOMS:
            return action.room;
        default:
            return state;
    }
}

export default rooms;