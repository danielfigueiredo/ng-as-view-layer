import {
  routerEnhancer,
  routerMiddleware,
} from '../router';
import {
  applyMiddleware,
  compose,
  createStore,
  StoreEnhancer,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import { appEpic } from './app.epics';
import { IAppState } from './app.types';
import { createRootReducer } from './app.reducer';

const epicMiddleware = createEpicMiddleware(appEpic);

const middlewares = applyMiddleware(epicMiddleware, routerMiddleware, logger);

const enhancers = <StoreEnhancer<IAppState>> compose(routerEnhancer, middlewares);

export const store = createStore(createRootReducer(), enhancers);
