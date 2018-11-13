import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = composeEnhancers(applyMiddleware(thunk));
} else {
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const store = createStore(
  reducer,
  enhancer,
);

export default store;
