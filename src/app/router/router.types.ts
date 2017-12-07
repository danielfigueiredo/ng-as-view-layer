import { Action } from 'app/store';

export type RouterActionTypePathMap = {
  HOME: string,
  PUSH_TO_POSTS: string,
};

export type RouterAction = Action<keyof RouterActionTypePathMap, any, void>;
