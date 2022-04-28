import { all } from 'redux-saga/effects';
import { watchSignup } from './userSaga.ts';

export default function* rootSaga() {
  yield all([watchSignup()]);
}
