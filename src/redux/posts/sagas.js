import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from './actions';

const API_URI = 'https://jsonplaceholder.typicode.com';
const fetchData = url => {
  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'applicatin/json'
    }
  });
};

export function* fetchPosts() {
  yield takeEvery(actions.FETCH_POSTS_REQUEST, function*() {
    try {
      const response = yield call(fetchData, API_URI + '/posts');

      if (response.status >= 200 && response.status < 300) {
        const posts = yield response.json();
        yield put({
          type: actions.FETCH_POSTS_SUCCESS,
          posts
        });
      } else {
        throw response;
      }
    } catch (error) {
      yield put({
        type: actions.FETCH_POSTS_FAIL,
        error: error.message || 'Something went wrong.'
      });
    }
  });
}

export function* fetchPost() {
  yield takeEvery(actions.FETCH_POST_REQUEST, function*({ id }) {
    try {
      const response = yield call(fetchData, API_URI + '/posts/' + id);
      if (response.status >= 200 && response.status < 300) {
        const post = yield response.json();
        yield put({
          type: actions.FETCH_POST_SUCCESS,
          post
        });
      } else {
        throw response;
      }
    } catch (error) {
      yield put({
        type: actions.FETCH_POSTS_FAIL,
        error: error.message || 'Something went wrong.'
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(fetchPosts), fork(fetchPost)]);
}
