import { Reducer } from './index';
import { SIGN_IN_SUCCESS } from '../constants';

const defaultState = {
  email: '',
  token: '',
  publisher: []
};

export default (state = defaultState, { type, payload }: Reducer) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      const { token, email, subscribers } = payload;
      return { ...state, token, email, subscribers };

    default:
      return state;
  }
};
