import {
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_ERROR
} from "../actionTypes";

const initialState = {
    isLoggedIn: false,
    error: null
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST_SUCCESS: {
            return {
                isLoggedIn: true,
                error: null
            };
        }
        case LOGIN_REQUEST_ERROR: {
            return {
                isLoggedIn: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}
