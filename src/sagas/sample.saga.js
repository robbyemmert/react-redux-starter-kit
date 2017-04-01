import { put, takeEvery } from 'redux-saga/effects';

import { SampleActions } from '../actions';
import { actionTypes } from '../constants';
import {
    sampleEndpoints
} from '../api';

function* postsList() {
    // let postsResponse = yield sampleEndpoints.postList.request();
    // let posts = yield postsResponse.json();
    let { success, error } = yield sampleEndpoints.postList.request();
    if (success) {
        yield put(SampleActions.setPosts(success));
    } else {
        console.error('there was a network error', error);
    }
}

export function* getPostsList() {
    yield takeEvery(actionTypes.GET_SAMPLE_POSTS, postsList);
}