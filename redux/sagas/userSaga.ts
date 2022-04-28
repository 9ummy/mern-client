import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { userActions } from '../reducers/userReducer.ts';
import { signupApi } from '../api/userApi.ts';

interface UserSignupType {
  type: string;
  payload: {
    userid: string;
    password: string;
    email: string;
    name: string;
    phone: string;
    birth: string;
    address: string;
  };
}

interface UserSignupSuccessType {
  type: string;
  payload: {
    userid: string;
  };
}

function* signup(user: UserSignupType) {
  try {
    const response: UserJoinSuccessType = yield signupApi(user.payload);
    yield put(userActions.signupSuccess(response));
  } catch (e) {
    yield put(userActions.signupFailure(e));
  }
}
export function* watchSignup() {
  yield takeLatest(userActions.signupRequest, signup);
}
