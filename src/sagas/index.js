import {
    getPostsList
} from './sample.saga';

export default function* rootSaga() {
    yield [
        getPostsList()
    ]
}