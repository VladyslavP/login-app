import { put, call, takeEvery } from 'redux-saga/effects';

import config from '../utils';
import { getDataAction } from "../common/actions";
import {
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_ERROR,
    LOGIN_REQUEST,
} from "../actionTypes";

function* loginAsync() {
    try {
        const response = call(getDataAction, config.webApiUrl, false);

        yield put({
            type: LOGIN_REQUEST_SUCCESS,
            response
        });
    } catch (error) {
        yield put({
            type: LOGIN_REQUEST_ERROR,
            error
        });
    }
}

export function* watchLoginAsync() {
    yield takeEvery(LOGIN_REQUEST, loginAsync)
}

