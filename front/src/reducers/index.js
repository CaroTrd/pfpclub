import { combineReducers } from 'redux';
import ambassadorsReducers from './ambassadors/index';
import sendIdReducers from './sendid/index';
import refreshReducer from './ambassadors/refreshReducer';

const reducers = combineReducers({ ambassadorsReducers, sendIdReducers, refreshReducer });

export default reducers;
