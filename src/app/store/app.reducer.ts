import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import { RouterMap } from './app.types';

const routesMap: RouterMap = {
  HOME: '/home',
};

const history = createHistory();

export const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
} = connectRoutes(history, routesMap);
