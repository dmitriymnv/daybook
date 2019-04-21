import { Reducer } from './index';
import { SIGN_IN_SUCCESS } from '../constants';

const defaultState = {
  email: '',
  token: ''
};

export default (state = defaultState, { type, payload }: Reducer) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      const { token, email } = payload;
      return { ...state, token, email };

    default:
      return state;
  }
};
