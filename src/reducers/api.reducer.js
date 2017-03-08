import { apiActionTypes } from '../constants';

const defaultDefaults = {
    options: {}
}

export function apiDefaults(state = defaultDefaults, action) {
    switch(action.type) {
        case apiActionTypes.RESET_DEFAULTS:
            return action.defaults;
        case apiActionTypes.SET_DEFAULTS:
            return Object.assign({}, state, action.defaults);
        case apiActionTypes.SET_HEADERS:
            return Object.assign({}, state, {
                options: Object.assign({}, state.options, {
                    headers: Object.assign({}, state.options.headers, action.headers)
                })
            });
    }
    return state;
}