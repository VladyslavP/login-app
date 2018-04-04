import { combineReducers } from 'redux';

import * as reducers from './reducers';

const rootReducer = combineReducers({
    authentication: reducers.authentication
});

export default rootReducer;
