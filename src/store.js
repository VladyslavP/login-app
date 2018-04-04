import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer';
import login from './sagas/login';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}

const store = configureStore();

sagaMiddleware.run(login);

export default store;
