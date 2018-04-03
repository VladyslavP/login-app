import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import configureStore from './store';
import './index.css';
import LoginApp from './LoginApp';
import * as sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore();

sagaMiddleware.run(sagas.login);

ReactDOM.render(
    <Provider store={store}>
        <LoginApp/>
    </Provider>,
    document.getElementById('root')
);
