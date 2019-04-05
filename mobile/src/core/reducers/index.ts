import { combineReducers } from 'redux';

import authReducer from './authReducer';
import { authModuleName as authModule } from '../constants';

export interface Reducer {
  type: string;
  payload?: any;
}

export default combineReducers({
  [authModule]: authReducer
});
