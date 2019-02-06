import { createStore } from 'redux';
import combineReducers from '../reducers/index';

const Store = createStore(
  combineReducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default Store;
