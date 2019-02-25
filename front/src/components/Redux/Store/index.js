import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import categoryReducers from '../Reducers/Category/index';
import searchReducers from '../Reducers/Search/index';
import ambassadorsReducers from '../Reducers/Ambassadors/index';
import partnerReducer from '../Reducers/Partners/index';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(combineReducers({
  categoryReducers,
  searchReducers,
  Partner: partnerReducer,
}), enhancer);

export default store;