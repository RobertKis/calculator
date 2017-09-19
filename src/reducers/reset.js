import { RESET } from '../actions/index';
import { Record } from 'immutable';

export const InitialState = Record({
  data: null
});
const initialState = new InitialState;

export default function (state = initialState, action){
  if(!(state instanceof InitialState)) return initialState.mergeDeep(state);

  if(action.type === RESET){
  	console.log('action.payload')
  	console.log(action.payload)
    const { data } = action.payload.defaultValues;
    return state.set('data', action.payload.defaultValues.data);
  }

  return state;
}