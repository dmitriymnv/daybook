import { all } from 'redux-saga/effects';

import { saga as authSaga } from './auth/actions';

export default function* rootSaga() {
  yield all([authSaga()]);
}
