import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';

let store = applyMiddleware(thunkMiddleware)(createStore)(reducers);

// Make the store available on the window object for debugging purposes
if (process.env.NODE_ENV === 'development') {
    window.store = store;
}

export default store;
