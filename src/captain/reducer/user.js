import type from "../type";

let initialState = {
    data: null,
    isLoggedIn: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.USER_SIGN_IN:
            return { ...state, data: action.data, isLoggedIn: true };
        case type.USER_SIGN_UP:
            return { ...state, data: action.data, isLoggedIn: true };
        case type.USER_SIGN_OUT:
            return { ...state, data: null, isLoggedIn: false }
        default:
            return state;
    }
}
