import { Map } from 'immutable';
import * as actions from './actions';

const initState = new Map({
  isLoading: true,
  items: [],
  item: null,
  error: ''
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.FETCH_POSTS_SUCCESS:
      return state
        .set('items', action.posts)
        .set('isLoading', !state.get('isLoading'));

    case actions.FETCH_POST_SUCCESS:
      return state
        .set('item', action.post)
        .set('isLoading', !state.get('isLoading'));

    case actions.FETCH_POSTS_FAIL:
    case actions.FETCH_POST_FAIL:
      return state
        .set('error', action.error)
        .set('isLoading', !state.get('isLoading'));

    default:
      return state;
  }
}
