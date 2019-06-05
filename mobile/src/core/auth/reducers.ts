import { SIGN_IN_SUCCESS, AuthState, AuthAction } from './types';

const initialState: AuthState = {
  email: '',
  token: '',
  subscribers: []
};

export default (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      const { subscribers, ...payload } = action.payload;
      return {
        ...state,
        subscribers: JSON.parse(subscribers),
        ...payload
      };
    default:
      return state;
  }
};
