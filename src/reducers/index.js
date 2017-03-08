import { combineReducers } from 'redux';

import { currentRoute } from './route.reducer';
import { apiDefaults } from './api.reducer';
import { posts } from './sample.reducer';

const rootReducer = combineReducers({
    currentRoute,
    apiDefaults,
    posts
});

export default rootReducer;
