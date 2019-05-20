import { AsyncStorage } from 'react-native';
import { all, take, put } from 'redux-saga/effects';

import { SignInType, AuthCheckType } from '../constants';

export function authCheck() {
  return {
    type: AuthCheckType.AUTH_CHECK_REQUEST
  };
}

export function SignIn(token: string) {
  return {
    type: SignInType.SIGN_IN_REQUEST,
    payload: {
      token
    }
  };
}

export function* SignInSaga() {
  while (true) {
    const {
      payload: { token }
    } = yield take(SignInType.SIGN_IN_REQUEST);

    AsyncStorage.setItem('user', JSON.stringify({ token }));

    yield put({
      type: SignInType.SIGN_IN_SUCCESS,
      payload: { toDecodeToken: token }
    });
  }
}

export function* authCheckSaga() {
  while (true) {
    yield take(AuthCheckType.AUTH_CHECK_REQUEST);

    const asyncUser = yield AsyncStorage.getItem('user');

    const { token } = JSON.parse(asyncUser);

    if (asyncUser !== null) {
      yield put({
        type: SignInType.SIGN_IN_SUCCESS,
        payload: { toDecodeToken: token }
      });
    } else {
      yield put({
        type: SignInType.SIGN_IN_ERRROR
      });
    }
  }
}

export const saga = function*() {
  yield all([SignInSaga(), authCheckSaga()]);
};
