export enum AppType {
  apiServer = 'http://192.168.0.105:8080'
}

// Auth
export const authModuleName = 'auth';

export enum AuthCheckType {
  AUTH_CHECK_REQUEST = 'AUTH_CHECK_REQUEST'
}

export enum SignInType {
  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_ERRROR = 'SIGN_IN_ERRROR'
}

// Обьект с ошибкой при ответе сервера
export interface ResponseAPIError {
  code: number;
  error_message: string;
  error_code?: number;
}
