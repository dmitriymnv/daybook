import { Reducer } from './index';
import { AUTH_CHECK_SUCCESS } from '../constants';

const defaultState = {
  token: ''
};

export default (state = defaultState, { type, payload }: Reducer) => {
  switch (type) {
    case AUTH_CHECK_SUCCESS:
      return state;

    default:
      return state;
  }
};
