import { combineReducers } from 'redux';
import { routerReducer } from 'app/router';
import { IAppState } from './app.types';

const asyncReducers = {};

export const createRootReducer = () => {
  return combineReducers<IAppState>({
    location: routerReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (typeof asyncReducers[key] !== 'undefined') {
    return;
  }

  asyncReducers[key] = reducer;
  store.replaceReducer(createRootReducer());
};
