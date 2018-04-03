import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}
