import { AsyncStorage } from 'react-native';
import { all, take, put } from 'redux-saga/effects';

import {
  AUTH_CHECK_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERRROR
} from '../constants';

export function authCheck() {
  return {
    type: AUTH_CHECK_REQUEST
  };
}

export function SignIn(toDecodeToken: string) {
  return {
    type: SIGN_IN_REQUEST,
    payload: {
      toDecodeToken
    }
  };
}

export function* SignInSaga() {
  while (true) {
    const {
      payload: { token, email }
    } = yield take(SIGN_IN_REQUEST);

    yield AsyncStorage.setItem('user', JSON.stringify({ token, email }));

    yield put({
      type: SIGN_IN_SUCCESS,
      payload: {
        email,
        token
      }
    });
  }
}

export function* authCheckSaga() {
  while (true) {
    yield take(AUTH_CHECK_REQUEST);

    const asyncUser = yield AsyncStorage.getItem('user');

    const user = JSON.parse(asyncUser);

    if (asyncUser !== null) {
      yield put({
        type: SIGN_IN_SUCCESS,
        payload: { ...user }
      });
    } else {
      yield put({
        type: SIGN_IN_ERRROR
      });
    }
  }
}

export const saga = function*() {
  yield all([SignInSaga(), authCheckSaga()]);
};
