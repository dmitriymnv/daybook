import { combineReducers } from 'redux';

import authReducer from './authReducer';
import { authModuleName as authModule } from '../constants';

export interface Reducer {
  type: Object;
  payload?: {};
}

export default combineReducers({
  [authModule]: authReducer
});
