export const authModuleName = 'auth';
export const apiServer = 'http://192.168.0.105:8080';

// Типы для саг
export const AUTH_CHECK_REQUEST = `AUTH_CHECK_REQUEST`;

export const SIGN_IN_REQUEST = `SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `SIGN_IN_SUCCESS`;
export const SIGN_IN_ERRROR = `SIGN_IN_ERRROR`;

export interface ResponseAPIError {
  code: number;
  error_message: string;
  error_code?: number;
}
