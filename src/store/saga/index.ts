import userSaga from './user/sagas';
import repositorySaga from './repository/sagas';
import { combineReducers } from 'redux';

import { all, fork } from 'redux-saga/effects';
import { repositoryReducer } from './repository/reducer';
import { userReducer } from './user/reducer';
import { UserState } from './user/types';
import { RepositoryState } from './repository/types';

export function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(repositorySaga)
  ]);
};

export const rootReducer = combineReducers({
  user: userReducer,
  repository: repositoryReducer
});

export interface storeState {
  user: UserState;
  repository: RepositoryState
}