import { actionTypes } from '../constants';

export default class RouteActions {
    static setAppRoute(route) {
        return {
            type: actionTypes.SET_APP_ROUTE,
            route
        }
    }
}
