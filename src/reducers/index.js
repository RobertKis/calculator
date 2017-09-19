import { combineReducers } from 'redux';
import Reset from './reset';
import Position from './position';
import TermPosition from './termPosition';
import Offer from './offerCalculator';

const rootReducer = combineReducers({
  reset: Reset,
  position: Position,
  termPosition: TermPosition,
  offer: Offer
});

export default rootReducer;
