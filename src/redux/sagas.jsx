import { takeEvery, put, call } from 'redux-saga/effects'
import { REQUEST_POST, FETCHED_POST } from './types'
import { showLoader, hideLoader, showAlert } from './actions'

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POST, sagaWorker)
}

function* sagaWorker() {
    try{
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({ type: FETCHED_POST, payload })
        yield put(hideLoader())
    } catch{
        yield put(showAlert('что то пошло не так'))
        yield put(hideLoader())
    }
    
}

async function fetchPosts() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}