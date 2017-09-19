import Axios from 'axios';

export const TERM_POSITION = 'TERM_POSITION';
export const POSITION = 'POSITION';
export const RESET = 'RESET';

export function readFromConfig(){   
  const url = 'https://js-developer-second-round.herokuapp.com/api/v1/application/constraints';
   console.log("action")
  const request = Axios.get(url)
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
      console.log("error")
    }
    return {
        type: RESET,
        payload: { defaultValues: response }
      }
    });
  console.log(request)
  return request;
}

export function calculateOffer(amount, term){
  const url = `https://js-developer-second-round.herokuapp.com/api/v1/application/first-loan-offer?amount=${amount}=&term=${term}`;
   console.log("action")
  const request = Axios.get(url)
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
      console.log("error")
    }
    return {
        type: RESET,
        payload: { defaultValues: response }
      }
    });
  console.log(request)
  return request;
}

export function setPosition(value){
  return{
    type: POSITION,
    payload: { amount: value}
  }
}

export function setTermPosition(value){
  return{
    type: TERM_POSITION,
    payload: { amount: value}
  }
}
