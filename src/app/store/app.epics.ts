import 'rxjs/add/operator/mergeMap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Epic, combineEpics } from 'redux-observable';
import {
  Action,
  IAppState,
} from './app.types';

// This example does not have any app level epics so I created a stub one
// as a placeholder, but normally apps would have some
const rootEpic: Epic<Action, IAppState> = combineEpics((action$) =>
  action$.filter(action => action.type === '@@@_NON_EXISTING_ACTION_@@@')
);

const epic$ = new BehaviorSubject(rootEpic);

export const appEpic: Epic<Action, IAppState> = (action$, store) =>
  epic$.mergeMap(epic => epic(action$, store, null));

export const injectEpic = (asyncEpic: Epic<Action, IAppState>) => epic$.next(asyncEpic);
