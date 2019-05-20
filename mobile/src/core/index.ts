import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';
import decodedToken from './middlewares/token';

const sagaMiddleware = createSagaMiddleware();

export type AppState = ReturnType<typeof rootReducer>;

export default () => {
  const middlewares = [decodedToken, sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middleWareEnhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};
