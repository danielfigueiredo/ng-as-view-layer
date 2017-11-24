import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import { appEpics } from './app.epics';

export interface IAppState {
  test: string;
  location: { pathname: string },
}

export const testReducer = (state: string = 'old value', action: any) =>
  action.type === 'SET_TEST' ? action.payload : state;

const routesMap = {
  HOME: '/home',
};

const history = createHistory();

const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
} = connectRoutes(history, routesMap);

export const rootReducer = combineReducers<IAppState>({
  test: testReducer,
  location: routerReducer,
});

const epicMiddleware = createEpicMiddleware(appEpics);

const middlewares = applyMiddleware(epicMiddleware, routerMiddleware, logger);

export const store = createStore(rootReducer, compose(routerEnhancer, middlewares));
