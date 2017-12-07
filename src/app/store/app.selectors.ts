import { propOr } from 'ramda';

// this exists mostly to allow us to use a selector from a slice that
// hasn't been lazy loaded yet, so that it provides a default value (i.e. initialState)
// in order to avoid errors. Not that we should have cross dependency in modules like that
// but it acts as a safety layer
export const nullableStateSelector = <S, K extends keyof S>(prop: K, initialStateSlice: S[K]): (state: S) => S[K] =>
  propOr(initialStateSlice, prop);
