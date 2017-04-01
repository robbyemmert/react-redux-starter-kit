import { actionTypes } from '../constants';

export function currentRoute(state = '', action) {
    switch (action.type) {
        case actionTypes.SET_APP_ROUTE:
            return action.route;
        default:
            return state;
    }
}
