import {ADD_TO_LIST} from "../actions/index";

function videoList(state = [], action) {
    switch (action.type) {
        case ADD_TO_LIST:
             return [...state, action.vid];
        default:
            return state;
    }
}

export default videoList;