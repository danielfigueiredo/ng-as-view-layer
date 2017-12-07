import { Action } from './app.types';

export const createAction = <T, P, M>(type: T, payload: P, meta?: M): Action<T, P, M> => ({ type, payload, meta });
