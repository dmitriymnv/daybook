export const authModuleName = 'auth';
export const apiServer = 'http://192.168.0.105:8080';

export const AUTH_CHECK_REQUEST = `AUTH_CHECK_REQUEST`;
export const AUTH_CHECK_SUCCESS = `AUTH_CHECK_SUCCESS`;
export const AUTH_CHECK_ERROR = `AUTH_CHECK_ERROR`;

export interface ResponseAPIError {
  code: number;
  error_message: string;
  error_code?: number;
}
