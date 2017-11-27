import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import {
  createFetchJsonSucceededAction,
  createPongAction,
  FETCH_JSON_ACTION_TYPE,
  PING_ACTION_TYPE,
} from './app.actions';

export const testEpic = (action$: Observable<any>) =>
  action$.filter(action => action.type === PING_ACTION_TYPE)
    .delay(3000)
    .mapTo(createPongAction('PONG'));

export const getJSONMock = (action$: Observable<any>) =>
  action$.filter(action => action.type === FETCH_JSON_ACTION_TYPE)
    .switchMap(() => Observable.ajax('https://jsonplaceholder.typicode.com/posts')
      .map(json => (createFetchJsonSucceededAction(json))));

export const appEpics = combineEpics(testEpic, getJSONMock);
