import { AsyncStorage } from 'react-native';
import { all, take, put } from 'redux-saga/effects';
import decode from 'jwt-decode';

import {
  AUTH_CHECK_REQUEST,
  AUTH_CHECK_SUCCESS,
  AUTH_CHECK_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERRROR
} from '../constants';

export function authCheck() {
  return {
    type: AUTH_CHECK_REQUEST
  };
}

export function SignIn(data: object) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { data }
  };
}

export function* SignInSaga() {
  while (true) {
    const action = yield take(SIGN_IN_REQUEST);
    const { token } = action.payload.data;

    const decodedToken = decode(token);

    yield put({
      type: SIGN_IN_SUCCESS,
      payload: { ...decodedToken, token }
    });
  }
}

export function* authCheckSaga() {
  while (true) {
    yield take(AUTH_CHECK_REQUEST);

    const user = yield AsyncStorage.getItem('USER');

    if (user !== null) {
      yield put({
        type: AUTH_CHECK_SUCCESS,
        payload: { user }
      });
    } else {
      yield put({
        type: AUTH_CHECK_ERROR
      });
    }
  }
}

export const saga = function*() {
  yield all([SignInSaga()]);
};
