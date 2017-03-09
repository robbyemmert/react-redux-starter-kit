import { combineReducers } from 'redux';
import { segmentReducer } from 'redux-segmentize';

import { currentRoute } from './route.reducer';
import { apiDefaults } from './api.reducer';
import { posts } from './sample.reducer';
import { count } from './sampleSegment.reducer';

const rootReducer = combineReducers({
    currentRoute,
    apiDefaults,
    posts,
    count: segmentReducer(count)
});

export default rootReducer;
