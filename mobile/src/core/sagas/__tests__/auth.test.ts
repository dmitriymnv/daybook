import { SignInSaga, authCheckSaga } from '../auth';
import { take, put } from 'redux-saga/effects';
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from '../../constants';

beforeAll(() => {
  jest.mock('@react-native-community/async-storage');
});

describe('Auth Saga', () => {
  it('Авторизоваться', () => {
    const saga = SignInSaga();

    const requestData = {
      token: '123',
      email: 'example@example.com'
    };

    const requestAction = {
      type: SIGN_IN_REQUEST,
      payload: requestData
    };

    expect(saga.next().value).toEqual(take(SIGN_IN_REQUEST));

    expect(saga.next(requestAction).value).toEqual(
      put({
        type: SIGN_IN_SUCCESS,
        payload: requestData
      })
    );
  });
});
