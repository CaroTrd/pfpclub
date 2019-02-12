import { combineReducers } from 'redux';
import ambassadorsReducers from './ambassadors/index';
import sendIdReducers from './sendid/index';

const reducers = combineReducers({ ambassadorsReducers, sendIdReducers });

export default reducers;
