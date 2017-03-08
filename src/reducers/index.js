import { combineReducers } from 'redux';

import { currentRoute } from './route.reducer';

const rootReducer = combineReducers({
    currentRoute
});

export default rootReducer;
