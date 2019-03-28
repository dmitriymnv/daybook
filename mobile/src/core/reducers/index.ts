import { combineReducers } from 'redux';

import authReducer from './authReducer';
import { authModuleName as authModule } from '../constants';

export interface IReducer {
  type: string;
  payload?: any;
}

export default combineReducers({
  [authModule]: authReducer
});
