import { all } from 'redux-saga/effects';

import { saga as journalSaga } from './journals';

export default function* rootSaga() {
  yield all([journalSaga()]);
}
