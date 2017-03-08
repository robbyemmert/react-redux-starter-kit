import { put, takeEvery } from 'redux-saga/effects';

import { SampleActions } from '../actions';
import { actionTypes } from '../constants';
import {
    SampleService
} from '../services';

function* postsList() {
    let posts = yield SampleService.postList.request().then(res => res.json());
    yield put(SampleActions.setPosts(posts));
}

export function* getPostsList() {
    yield takeEvery(actionTypes.GET_SAMPLE_POSTS, postsList);
}