import { apiActionTypes } from '../constants';

export default class ApiActions {
    static resetDefaults(defaults) {
        return {
            type: apiActionTypes.RESET_DEFAULTS,
            defaults
        }
    }

    static setDefaults(defaults) {
        return {
            type: apiActionTypes.SET_DEFAULTS,
            defaults
        }
    }

    static setDefaultHeaders(headers) {
        return {
            type: apiActionTypes.SET_HEADERS,
            headers
        }
    }
}