import { combineReducers } from 'redux';
import Reset from './reset';
import Position from './position';
import TermPosition from './termPosition';

const rootReducer = combineReducers({
  reset: Reset,
  position: Position,
  termPosition: TermPosition
});

export default rootReducer;
