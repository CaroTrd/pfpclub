/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import categoryReducers from '../Reducers/Category/index';
import searchReducers from '../Reducers/Search/index';
import partnerReducer from '../Reducers/Partners/index';


const store = createStore(
  combineReducers({
    categoryReducers,
    searchReducers,
    Partner: partnerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
