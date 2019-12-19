import { Reducer } from 'redux';
import { RepositoryState, RepositoryActionTypes } from './types';

export const initialState: RepositoryState = {
    data: [],
    error: '',
    loading: false
};

const reducer: Reducer<RepositoryState> = (state = initialState, action) => {
    switch (action.type) {
        case RepositoryActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true };
        }
        case RepositoryActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload };
        }
        case RepositoryActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, errors: action.payload };
        }
        default: {
            return state;
        }
    }
};

export { reducer as repositoryReducer };
