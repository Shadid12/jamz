export const FB_LOGED_IN = 'FB_LOGED_IN';

export function facebookAuth(fb_auth) {
    const action = {
        type: FB_LOGED_IN,
        fb_auth
    };
    return action;
}