export const contentTypes = {
    JSON: 'application/json',
    BLOB: 'application/octet-stream',
    TEXT: 'text/plain',
    FORM: 'application/x-www-form-urlencoded'
}

const parsers = {
    [contentTypes.JSON]: response => response.json(),
    [contentTypes.BLOB]: response => response.blob(),
    [contentTypes.TEXT]: response => response.text(),
    [contentTypes.FORM]: response => response.formData()
}

export function makeRequest(url, method = 'GET', payload, options = {}) {
    method = method.toUpperCase();

    let info = Object.assign({
        method,
        body: method === 'GET' ? undefined : payload
    }, options);

    let request = new Request(url, info);

    return fetch(request)
    .then(response => parseResponse(response).then(body => ({ request, response, body })))
    .then(({request, response, body}) => formatResponse(request, response, body, options));
}
window.makeRequest = makeRequest;

export function parseResponse(response) {
    let contentTypeString = response.headers.get('Content-Type');
    let contentType = contentTypeString.split(';')[0];
    let parser = parsers[contentType];
    parser = parser || parsers[contentTypes.TEXT];
    return parser(response);
}

export function formatResponse(request, response, body, options) {
    let {
        ok,
        headers,
        redirected,
        status,
        statusText,
        type
    } = response;

    let formattedResponse = {
        ok,
        headers,
        redirected,
        status,
        statusText,
        type,
        badRequest: status === 400,
        unauthorized: status === 401,
        paymentRequired: status === 402,
        forbidden: status === 403,
        notFound: status === 404,
        serverError: status === 500,
        noInternet: status <= 0,
        body,
        response,
        request,
        error: !ok ? body : null,
        success: ok ? body : null
    }

    if (options.exceptionOnError) {
        throw new Error(formattedResponse);
    }

    return formattedResponse;
}