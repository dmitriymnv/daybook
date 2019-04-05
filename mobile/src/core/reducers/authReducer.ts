import { Reducer } from './index';
import { AUTH_CHECK_SUCCESS } from '../constants';

const defaultState = {
  user: {}
};

export default (state = defaultState, { type, payload }: Reducer) => {
  switch (type) {
    case AUTH_CHECK_SUCCESS:
      console.log('Пользователь авторизован');
      return state;

    default:
      return state;
  }
};
