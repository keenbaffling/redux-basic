import { createBrowserHistory } from 'history';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;
const middlewares = [sagaMiddleware, routeMiddleware];

const store = createStore(
  connectRouter(history)(combineReducers({ ...rootReducer })),
  composeEnhancers(applyMiddleware(...middlewares))
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers');
    store.replaceReducer(nextRootReducer);
  });
}

sagaMiddleware.run(rootSaga);

export { store, history };
