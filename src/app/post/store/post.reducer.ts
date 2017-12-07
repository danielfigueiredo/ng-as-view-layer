import { PostState } from './post.types';
import { FETCH_POSTS_COMPLETED } from './post.actions';

export const postInitialState: PostState = {
  posts: [],
};

export const postReducer = (state = postInitialState, action): PostState => {
  switch (action.type) {
    case FETCH_POSTS_COMPLETED:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
