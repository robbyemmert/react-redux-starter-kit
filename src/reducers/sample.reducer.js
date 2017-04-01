import { actionTypes } from '../constants';

export function posts(state = [], action) {
    switch(action.type) {
        case actionTypes.SET_SAMPLE_POSTS:
            return [...action.posts];
    }

    return state;
}