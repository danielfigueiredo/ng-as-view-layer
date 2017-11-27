import {
  Action,
  FetchJsonAction,
  FetchJsonActionType,
  FetchJsonSucceededAction,
  FetchJsonSucceededActionType,
  PingAction,
  PingActionType,
  PongAction,
  PongActionType,
  RouterAction,
  RouterMap,
} from './app.types';

export const createAction = <T, P, M>(type: T, payload?: P, meta?: M): Action<T, P, M> => ({ type, payload, meta });

// Normal action sample
export const PING_ACTION_TYPE: PingActionType = 'PING';
export const PONG_ACTION_TYPE: PongActionType = 'PONG';

export const createPingAction = (payload: string): PingAction => createAction(PING_ACTION_TYPE, payload);
export const createPongAction = (payload: string): PongAction => createAction(PONG_ACTION_TYPE, payload);

export const createRouterAction = (type: keyof RouterMap): RouterAction => createAction(type);

// Fetch sample
export const FETCH_JSON_ACTION_TYPE: FetchJsonActionType = 'FETCH_JSON';
export const FETCH_JSON_SUCCEEDED_ACTION_TYPE: FetchJsonSucceededActionType = 'FETCH_JSON_SUCCEEDED';

export const createFetchJsonAction = (): FetchJsonAction => createAction(FETCH_JSON_ACTION_TYPE);
export const createFetchJsonSucceededAction = (payload: any): FetchJsonSucceededAction =>
  createAction(FETCH_JSON_SUCCEEDED_ACTION_TYPE, payload);
