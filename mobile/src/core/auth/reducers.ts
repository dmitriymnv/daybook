import { SIGN_IN_SUCCESS, AuthState, AuthAction } from './types';

const initialState: AuthState = {
  email: '',
  token: '',
  subscribers: []
};

export default (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
