import { createAction } from 'app/store';
import {
  FetchPostsCompletedAction,
  FetchPostsCompletedType,
  FetchPostsRequestedAction,
  FetchPostsRequestedType,
  Post,
} from './post.types';

export const FETCH_POSTS_REQUESTED: FetchPostsRequestedType = 'FETCH_POSTS_REQUESTED';
export const FETCH_POSTS_COMPLETED: FetchPostsCompletedType = 'FETCH_POSTS_COMPLETED';

export const fetchPostsRequested = (): FetchPostsRequestedAction => createAction(FETCH_POSTS_REQUESTED, null);
export const fetchPostsCompleted = (posts: Array<Post>): FetchPostsCompletedAction =>
  createAction(FETCH_POSTS_COMPLETED, posts);
