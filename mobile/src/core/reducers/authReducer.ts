import { Reducer } from './index';
import { AUTH_CHECK_SUCCESS, SIGN_IN_SUCCESS } from '../constants';

const defaultState = {
  email: '',
  token: ''
};

export default (state = defaultState, { type, payload }: Reducer) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return { ...payload.email, ...payload.token };

    default:
      return state;
  }
};
