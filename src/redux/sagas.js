import { all } from 'redux-saga/effects';
import postsSaga from './posts/sagas';

export default function* rootSaga(getState) {
  yield all([
    postsSaga()
  ]);
};
