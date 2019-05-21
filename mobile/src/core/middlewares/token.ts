import decode from 'jwt-decode';
import { Dispatch, AnyAction } from 'redux';
import { AuthState } from '../auth/types';

export default () => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  const { type, payload, ...rest } = action;

  if (payload && payload.toDecodeToken) {
    const decodedToken: AuthState = decode(payload.toDecodeToken);

    next({
      type,
      payload: {
        token: payload.toDecodeToken,
        ...decodedToken
      },
      ...rest
    });
  } else {
    next(action);
  }
};
