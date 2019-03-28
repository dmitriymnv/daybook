import { all } from 'redux-saga/effects';

import { saga as authSaga } from './auth';

export default function* rootSaga() {
  yield all([authSaga()]);
}
