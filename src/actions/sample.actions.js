import { actionTypes } from '../constants';

export default class SampleActions {
    static getPosts() {
        return {
            type: actionTypes.GET_SAMPLE_POSTS
        }
    }

    static setPosts(posts) {
        return {
            type: actionTypes.SET_SAMPLE_POSTS,
            posts
        }
    }
}