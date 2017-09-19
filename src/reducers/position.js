import { POSITION } from '../actions/index';
import { Record } from 'immutable';

export const InitialState = Record({
  amount: null
});
const initialState = new InitialState;

export default function (state = initialState, action){
  if(!(state instanceof InitialState)) return initialState.mergeDeep(state);
  
  if(action.type === POSITION){
    const { amount } = action.payload;
    return state.set('amount', amount);
  }

  return state;
}