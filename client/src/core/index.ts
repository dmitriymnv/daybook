import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
//midlewares
import decodedToken from './middlewares/token';
//reducers
import authReducer from './auth/reducers';

const rootReducer = combineReducers({
  auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();

export type AppState = ReturnType<typeof rootReducer>;

export default () => {
  const middlewares = [decodedToken, sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middleWareEnhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};
