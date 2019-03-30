import { all } from 'redux-saga/effects';

import { apiServer } from '../constants';

export function AllJournals({ to }: { to: number }) {
  return fetch(`${apiServer}/journals`, {
    method: 'POST',
    body: JSON.stringify({ to })
  });
}

export const saga = function*() {
  yield all([]);
};
