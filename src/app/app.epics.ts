import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';

export const testEpic = (action$: Observable<any>) =>
  action$.filter(action => action.type === 'SET_TEST_1')
    .delay(3000)
    .mapTo({ type: 'SET_TEST', payload: 'PONG' });

export const getJSONMock = (action$: Observable<any>) =>
  action$.filter(action => action.type === 'GET_JSON_MOCK')
    .switchMap(() => Observable.ajax('https://jsonplaceholder.typicode.com/posts')
      .map(json => ({ type: 'AJAX WORKS', payload: json })));

export const appEpics = combineEpics(testEpic, getJSONMock);
