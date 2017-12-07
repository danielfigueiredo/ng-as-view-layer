import { Action } from 'app/store';

export type Post = {
  id: number,
  userId: number,
  title: string,
  body: string,
};

export type PostState = {
  posts: Array<Post>,
};

export type FetchPostsRequestedType = 'FETCH_POSTS_REQUESTED';
export type FetchPostsCompletedType = 'FETCH_POSTS_COMPLETED';

export type FetchPostsRequestedAction = Action<FetchPostsRequestedType, void, void>;
export type FetchPostsCompletedAction = Action<FetchPostsCompletedType, Array<Post>, void>;

export type PostActions =
  | FetchPostsRequestedAction
  | FetchPostsCompletedAction
  ;
