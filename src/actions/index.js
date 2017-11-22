export const FB_LOGED_IN = 'FB_LOGED_IN';
export const ADD_TO_LIST = 'ADD_TO_LIST';

export function facebookAuth(fb_auth) {
    const action = {
        type: FB_LOGED_IN,
        fb_auth
    };
    return action;
}

export function addVideoToList(vid) {
    const action = {
        type: ADD_TO_LIST,
        vid
    }
}