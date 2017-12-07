import { LocationState } from 'redux-first-router';
import { PostState } from 'app/post/store';

export type IAppState = {
  location: LocationState,
  post?: PostState,
};

export type Action<T = string, P = any, M = any> = {
  type: T,
  payload: P,
  meta?: M,
};
