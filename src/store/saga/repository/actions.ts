import { action } from 'typesafe-actions';
import { RepositoryActionTypes } from './types';
import { Repository } from '../../type/repository';

export const fetchRequest = (name: string) => action(RepositoryActionTypes.FETCH_REQUEST, name);
export const fetchSuccess = (data: Repository[]) => action(RepositoryActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(RepositoryActionTypes.FETCH_ERROR, message);
export const fetchRequestWatched = (name: string) => action(RepositoryActionTypes.FETCH_REQUEST_WATCHED, name);
export const fetchSuccessWatched = (data: Repository[]) => action(RepositoryActionTypes.FETCH_SUCCESS_WATCHED, data);
export const fetchErrorWatched = (message: string) => action(RepositoryActionTypes.FETCH_ERROR_WATCHED, message);
