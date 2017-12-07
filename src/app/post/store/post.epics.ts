import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/dom/ajax';
import {
  Observable,
  AjaxResponse,
} from 'rxjs';
import {
  combineEpics,
  Epic,
} from 'redux-observable';
import { IAppState } from 'app/store';
import {
  FETCH_POSTS_REQUESTED,
  fetchPostsCompleted,
} from './post.actions';
import {
  FetchPostsCompletedAction,
  PostActions,
} from './post.types';

export const fetchPosts: Epic<PostActions, IAppState> = (action$): Observable<FetchPostsCompletedAction> =>
  action$.filter(action => action.type === FETCH_POSTS_REQUESTED)
    .switchMap<PostActions, FetchPostsCompletedAction>(() =>
      Observable.ajax('https://jsonplaceholder.typicode.com/posts')
        .map(({response}: AjaxResponse) => (fetchPostsCompleted(response))));

export const postEpic = combineEpics(fetchPosts);
