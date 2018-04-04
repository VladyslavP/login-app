import { put, call, takeEvery } from 'redux-saga/effects';

import config from '../utils';
import { postDataAction } from "../common/actions";
import { setAuthToken } from "../common/helpers";
import {
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_ERROR,
    LOGIN_REQUEST,
} from "../actionTypes";

function* loginAsync({ payload: { email, password } }) {
    const model = {
        application_id: 'a68be319fca51caca60eed5711226e568bd1c1d13ff452b945515f1a6ffbaca4',
        email,
        password
    };
    try {
        const response = yield call(postDataAction, config.webApiUrl, model);
        setAuthToken(response);
        yield put({
            type: LOGIN_REQUEST_SUCCESS,
        });
    } catch (error) {
        yield put({
            type: LOGIN_REQUEST_ERROR,
            error: {
                message: error.statusText,
                status: error.status
            }
        });
    }
}

export default function* watchLoginAsync() {
    yield takeEvery(LOGIN_REQUEST, loginAsync)
}
