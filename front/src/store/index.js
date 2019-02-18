/*eslint-disable*/
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers/index';

const Store = createStore(
  combineReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default Store;
