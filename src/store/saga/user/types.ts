import { User } from '../../type/user';

export enum UserActionTypes {
  FETCH_REQUEST = '@@user/FETCH_REQUEST',
  FETCH_SUCCESS = '@@user/FETCH_SUCCESS',
  FETCH_ERROR = '@@user/FETCH_ERROR',
}

export interface UserState {
  readonly loading: boolean;
  readonly data: User;
  readonly error: string;
}
