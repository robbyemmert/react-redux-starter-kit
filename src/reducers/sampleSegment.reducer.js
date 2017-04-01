import { actionTypes } from '../constants';

export function count(state = 0, action) {
    switch(action.type) {
        case actionTypes.INCREMENT_SEGMENT_COUNTER:
            return state + 1;
        case actionTypes.DECREMENT_SEGMENT_COUNTER:
            return state - 1;
    }
    return state;
}