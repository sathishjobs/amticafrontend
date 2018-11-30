import type from "../type";
import { User } from "../../api/user";
import { SubmissionError } from "redux-form";

function signInSuccess(data) {
    return {
        type: type.USER_SIGN_IN,
        data
    }
};

function signUpSuccess(data) {
    return {
        type: type.USER_SIGN_UP,
        data,
    }
}

export function signOut(){
    return {
        type : type.USER_SIGN_OUT,
        data : null,
    }
}

export function signIn(values) {
    return async dispatch => {
        try {
            const data = await User.signin(values);
            dispatch(signInSuccess(data));
        } catch (e) {
            if (e.response && e.response.data && e.response.data.error) {
                throw new SubmissionError({ [e.response.data.field]: e.response.data.message, _error: "Login Failed" });
            }
           throw e;
        } 
    };
}


export function signUp(values) {
    return async dispatch => {
        try {
            const data = await User.signUp(values);
            dispatch(signUpSuccess(data));
        } catch (e) { 
            if (e.response && e.response.data && e.response.data.error) {
                throw new SubmissionError({ [e.response.data.field]: e.response.data.message, _error: "Login Failed" });
            }
            throw e;
        }
    };
}




