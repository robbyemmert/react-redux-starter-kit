import { Api } from 'api-map';
import store from '../store';
import { makeRequest } from './requester';

// reduxifying the base resolver.
// this should really be built into a re-usable library
function customResolver(url, method, data, options) {
    // load defaults from the store and apply them to the request
    let reduxApiSettings = store.getState().apiDefaults;
    let settings = Object.assign({}, reduxApiSettings, {
        url,
        method,
        data,
        options: Object.assign({}, reduxApiSettings.options, options)
    });

    return makeRequest(
        settings.url, 
        settings.method, 
        settings.data, 
        settings.options
    )

    // TODO: add a more robust parser here.  Detect content type and automatically parse it.
}

var api = new Api({
    baseUrl: 'https://jsonplaceholder.typicode.com' // Change this to your base URL
}, customResolver);

export default api;