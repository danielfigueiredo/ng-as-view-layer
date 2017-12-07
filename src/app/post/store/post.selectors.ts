import { IAppState, nullableStateSelector } from 'app/store';
import {
  Post,
  PostState,
} from './post.types';
import { createSelector } from 'reselect';
import { postInitialState } from './post.reducer';

export const postStateSelector = nullableStateSelector<IAppState, 'post'>('post', postInitialState);

export const postsSelector = createSelector(
  postStateSelector,
  (post: PostState): Array<Post> => post.posts,
);
