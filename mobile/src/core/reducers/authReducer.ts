import { Reducer } from './index';
import { SignInType, AuthCheckType } from '../constants';

export interface authType {
  email: string;
  token: string;
  subscribers: Array<string>;
}

const defaultState = {
  email: '',
  token: '',
  subscribers: []
};

interface ReducerAuth extends Reducer {
  type: SignInType | AuthCheckType;
}

export default (state = defaultState, { type, payload }: ReducerAuth) => {
  switch (type) {
    case SignInType.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
