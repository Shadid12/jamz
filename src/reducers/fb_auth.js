import {FB_LOGED_IN} from "../actions/index";

function facebookAuth(state = null, action) {
    switch (action.type) {
        case FB_LOGED_IN:
            return action.fb_auth;
        default:
            return state;
    }
}

export default facebookAuth;