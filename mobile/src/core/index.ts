import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';
//midlewares
import decodedToken from './middlewares/token';

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(decodedToken, sagaMiddleware);

const store = createStore(reducers, middlewares);
sagaMiddleware.run(rootSaga);

export default store;
