import { action } from 'typesafe-actions';
import { UserActionTypes } from './types';
import { User } from '../../type/user';

export const fetchRequest = (name: string) => action(UserActionTypes.FETCH_REQUEST, name);
export const fetchSuccess = (data: User) => action(UserActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(UserActionTypes.FETCH_ERROR, message);
