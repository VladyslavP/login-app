import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import './index.css';
import LoginApp from './LoginApp';

ReactDOM.render(
    <Provider store={store}>
        <LoginApp/>
    </Provider>,
    document.getElementById('root')
);
