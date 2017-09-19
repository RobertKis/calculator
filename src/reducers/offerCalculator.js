import { OFFER } from '../actions/index';
import { Record } from 'immutable';

export const InitialState = Record({
  offer: null
});
const initialState = new InitialState;

export default function (state = initialState, action){
  if(!(state instanceof InitialState)) return initialState.mergeDeep(state);
  
  if(action.type === OFFER){
    const { offer } = action.payload;
    console.log('offer')
    console.log(offer)
    return state.set('offer', offer);
  }

  return state;
}