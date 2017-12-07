import {
  RouterAction,
  RouterActionTypePathMap,
} from './router.types';
import { createAction } from 'app/store/app.actions';

export const createRouterAction = (type: keyof RouterActionTypePathMap): RouterAction => createAction(type, {});

export const pushToPosts = () => createRouterAction('PUSH_TO_POSTS');
