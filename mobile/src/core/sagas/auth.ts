import { AsyncStorage } from 'react-native';
import { all, take, put } from 'redux-saga/effects';

import {
  AUTH_CHECK_REQUEST,
  AUTH_CHECK_SUCCESS,
  AUTH_CHECK_ERROR
} from '../constants';

export function authCheck() {
  return {
    type: AUTH_CHECK_REQUEST
  };
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
  yield all([authCheckSaga()]);
};
