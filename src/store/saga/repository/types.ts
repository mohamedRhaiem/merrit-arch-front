import { Repository } from '../../type/repository';

export enum RepositoryActionTypes {
    FETCH_REQUEST = '@@repository/FETCH_REQUEST',
    FETCH_SUCCESS = '@@repository/FETCH_SUCCESS',
    FETCH_ERROR = '@@repository/FETCH_ERROR',
    FETCH_REQUEST_WATCHED = "@@repository/FETCH_REQUEST_WATCHED",
    FETCH_SUCCESS_WATCHED = "@@repository/FETCH_SUCCESS_WATCHED",
    FETCH_ERROR_WATCHED = "@@repository/FETCH_ERROR_WATCHED"
}

export interface RepositoryState {
  readonly loading: boolean;
  readonly data: Repository[];
  readonly error: string;
}
