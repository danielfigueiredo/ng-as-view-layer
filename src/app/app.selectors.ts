import { createSelector } from 'reselect';
import { IAppState } from './app.reducer';

export const locationStateSelector = (state: IAppState) => state.location;
export const locationPathSelector = createSelector(
  locationStateSelector,
  (location: any) => location.pathname,
);