import {
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_ERROR,
    USER_AUTHENTICATED,
    LOGIN_REQUEST,
    SUCCESS_CLEAN_ERROR,
} from "../actionTypes";

const initialState = {
    isLoggedIn: false,
    error: null,
    isLoading: false
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                isLoading: true,
            }
        }
        case LOGIN_REQUEST_SUCCESS: {
            return {
                isLoggedIn: true,
                error: null,
                isLoading: false
            };
        }
        case LOGIN_REQUEST_ERROR: {
            return {
                isLoggedIn: false,
                error: action.error,
                isLoading: false
            };
        }
        case USER_AUTHENTICATED: {
            return {
                isLoggedIn: action.payload,
                error: null,
                isLoading: false
            };
        }
        case SUCCESS_CLEAN_ERROR: {
            return {
                ...state,
                error: null,
            };
        }
        default: {
            return state;
        }
    }
}
