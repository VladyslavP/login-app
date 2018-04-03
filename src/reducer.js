import { combineReducers } from 'redux';

import * as reducers from './reducers';

const rootReducer = combineReducers({
    login: reducers.login
});

export default rootReducer;
