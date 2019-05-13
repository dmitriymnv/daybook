import { Reducer } from './index';
import { SIGN_IN_SUCCESS } from '../constants';

const defaultState = {
  email: '',
  token: '',
  subscribers: []
};

export default (state = defaultState, { type, payload }: Reducer) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
