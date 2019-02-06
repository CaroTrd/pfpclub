import { combineReducers } from 'redux';
import ambassadorsReducers from './ambassadors/index';

const reducers = combineReducers({ info: ambassadorsReducers });

export default reducers;
