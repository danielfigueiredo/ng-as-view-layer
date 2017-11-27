import { combineReducers, createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { appEpics, IAppState, routerReducer, routerMiddleware, routerEnhancer } from './store';

export const rootReducer = combineReducers<IAppState>({
  location: routerReducer,
});

const epicMiddleware = createEpicMiddleware(appEpics);

const middlewares = applyMiddleware(epicMiddleware, routerMiddleware, logger);

const enhancers = <StoreEnhancer<IAppState>> compose(routerEnhancer, middlewares);

export const store = createStore<IAppState>(rootReducer, enhancers);
