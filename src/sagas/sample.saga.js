import { put, takeEvery } from 'redux-saga/effects';

import { SampleActions } from '../actions';
import { actionTypes } from '../constants';
import {
    SampleService
} from '../services';

function* postsList() {
    let postsResponse = yield SampleService.postList.request();
    let posts = yield postsResponse.json();
    yield put(SampleActions.setPosts(posts));
}

export function* getPostsList() {
    yield takeEvery(actionTypes.GET_SAMPLE_POSTS, postsList);
}