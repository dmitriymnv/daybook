export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERRROR = 'SIGN_IN_ERRROR';

export const AUTH_CHECK_REQUEST = 'AUTH_CHECK_REQUEST';

export interface AuthState {
  email: string;
  token: string;
  subscribers: string[];
}

interface payloadSignInAction {
  email: AuthState['email'];
  token: AuthState['token'];
  subscribers: string;
}

//ACTION

export interface SignInAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: payloadSignInAction;
}

export type AuthAction = SignInAction;
