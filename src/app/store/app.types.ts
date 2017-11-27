import { LocationState } from 'redux-first-router';

export type IAppState = {
  location: LocationState,
};

export type RouterMap = { HOME: string };

export type Action<T, P, M> = {
  type: T,
  payload?: P,
  meta?: M,
};

export type PingActionType = 'PING';
export type PongActionType = 'PONG';

export type PingAction = Action<PingActionType, string, void>;
export type PongAction = Action<PongActionType, string, void>;

export type RouterAction = Action<keyof RouterMap, void, void>;

export type FetchJsonActionType = 'FETCH_JSON';
export type FetchJsonSucceededActionType = 'FETCH_JSON_SUCCEEDED';

export type FetchJsonAction = Action<FetchJsonActionType, any, void>;
export type FetchJsonSucceededAction = Action<FetchJsonSucceededActionType, any, void>;
