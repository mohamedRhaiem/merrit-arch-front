import { Reducer } from 'redux';
import { UserState, UserActionTypes } from './types';
import { User } from '../../type/user';

export const initialState: UserState = {
    data: {} as User,
    error: null,
    loading: false
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true };
        }
        case UserActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload, error: '' };
        }
        case UserActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, error: action.payload.response.data.message };
        }
        default: {
            return state;
        }
    }
};

export { reducer as userReducer };
