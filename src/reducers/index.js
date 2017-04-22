import { combineReducers } from 'redux';
import ashanasReducer from './ashanas';
import sequenceReducer from './sequence';

export default combineReducers({
  ashana: ashanasReducer,
  sequence: sequenceReducer,
});
