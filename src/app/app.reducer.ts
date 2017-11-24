import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { testEpic } from './app.epics';

export interface IAppState {
  test: string;
}

export const testReducer = (state: string = 'old value', action: any) =>
  action.type === 'SET_TEST' ? action.payload : state;

export const rootReducer = combineReducers<IAppState>({
  test: testReducer,
});

const epicMiddleware = createEpicMiddleware(testEpic);

const middlewares = applyMiddleware(epicMiddleware, logger);

export const store = createStore(rootReducer, middlewares);
