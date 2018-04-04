import { actionCreator } from "../common/helpers";
import {
    LOGIN_REQUEST,
    USER_AUTHENTICATED,
    SUCCESS_CLEAN_ERROR,
} from "../actionTypes";

export function login(data) {
    return actionCreator(LOGIN_REQUEST, data);
}

export function userAuthenticated(data) {
    return actionCreator(USER_AUTHENTICATED, data);
}

export function cleanError() {
    return actionCreator(SUCCESS_CLEAN_ERROR);
}
