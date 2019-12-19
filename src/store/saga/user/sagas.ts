import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { UserActionTypes } from './types';
import {
    fetchError, fetchSuccess, fetchRequest
} from './actions';
import apiService from '../../service';

// fetch user by name
function* handleFetch(action: ReturnType<typeof fetchRequest>) {
    try {
        const result = yield call(apiService.getUser, action.payload);
        yield put(fetchSuccess(result.data));
    } catch (err) {
        yield put(fetchError(err));
    }
}

function* watchFetchRequest() {
    yield takeEvery(UserActionTypes.FETCH_REQUEST, handleFetch);
}

// end

// map watchers to saga
function* userSaga() {
    yield all([fork(watchFetchRequest)]);
}

export default userSaga;
