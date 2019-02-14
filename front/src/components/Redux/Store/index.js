/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import ambassadorsReducers from '../Reducers/Ambassadors/index';


const store = createStore(
  combineReducers({
    info: ambassadorsReducers,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
