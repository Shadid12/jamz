export const FB_LOGED_IN = 'FB_LOGED_IN';
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const SET_ROOMS   =  'SET_ROOMS';
export const SET_CURRENT_ROOM = 'SET_CURRENT_ROOM';

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
    };
    return action;
}

export function setRooms(rooms) {
	const action = {
		type: SET_ROOMS,
		rooms
	}
    return action;
}

export function setCurrentRoom(room) {
    const action = {
        type: SET_CURRENT_ROOM,
        room
    }
    return action;
}