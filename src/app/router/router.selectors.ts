import { createSelector } from 'reselect';
import { IAppState } from 'app/store';

export const locationStateSelector = (state: IAppState) => state.location;

export const locationPathSelector = createSelector(
  locationStateSelector,
  (location: any) => location.pathname,
);