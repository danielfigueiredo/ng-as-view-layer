import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import { RouterActionTypePathMap } from './router.types';

const routesMap: RouterActionTypePathMap = {
  HOME: '/',
  PUSH_TO_POSTS: '/posts',
};

const history = createHistory();

export const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
} = connectRoutes(history, routesMap);
