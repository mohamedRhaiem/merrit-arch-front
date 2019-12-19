import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { RepositoryActionTypes } from './types';
import {
    fetchError, fetchSuccess, fetchRequest, fetchSuccessWatched, fetchRequestWatched, fetchErrorWatched
} from './actions';
import apiService from '../../service';

// fetch repositories by userName
function* handleFetch(action: ReturnType<typeof fetchRequest>) {
    try {
        const result = yield call(apiService.getUserRepos, action.payload);
        yield put(fetchSuccess(result.data));
    } catch (err) {
        yield put(fetchError(err));
    }
}

function* watchFetchRequest() {
    yield takeEvery(RepositoryActionTypes.FETCH_REQUEST, handleFetch);
}

function* handleFetchWatched(action: ReturnType<typeof fetchRequestWatched>) {
    try {
        const result = yield call(apiService.getReposWatched, action.payload);
        yield put(fetchSuccessWatched(result.data));
    } catch (err) {
        yield put(fetchErrorWatched(err));
    }
}

function* watchFetchWatchedRequest() {
    yield takeEvery(RepositoryActionTypes.FETCH_REQUEST_WATCHED, handleFetchWatched);
}


// end

// map watchers to saga
function* repositorySaga() {
    yield all([fork(watchFetchRequest), fork(watchFetchWatchedRequest)]);
}

export default repositorySaga;
