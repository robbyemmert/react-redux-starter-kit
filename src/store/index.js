import createSagaMiddleWare from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleWare = createSagaMiddleWare();
const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleWare)
    )
)
sagaMiddleWare.run(sagas);

// Make the store available on the window object for debugging purposes
if (process.env.NODE_ENV === 'development') {
    window.store = store;
}

export default store;
