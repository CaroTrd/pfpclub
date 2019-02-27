/* eslint-disable no-underscore-dangle */
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(combineReducers({
  form: formReducer,
  routing: routerReducer,
}), enhancer);

export default store;
