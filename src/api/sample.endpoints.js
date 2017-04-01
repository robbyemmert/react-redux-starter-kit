import api from './api';

const postList = api.map({
    url: '/posts',
    method: 'GET'
});

const postSingle = api.map({
    url: params => `/posts/${params.id}`,
    method: 'GET'
});

export default {
    postList,
    postSingle
}