import React from 'react';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readFromConfig } from '../actions/index';
import { setPosition, calculateOffer } from '../actions/index';

@connect(
  ({ reset, position }) => ({
    data: reset.get('data'),
    currentPosition: position.get('amount')
  }),
  dispatch => bindActionCreators({ readFromConfig, calculateOffer, setPosition}, dispatch)
)
export default class Amount extends React.Component {
  
  constructor(props, context) {
    super(props, context)
      this.props.readFromConfig();
    }

  handleOnChange = (value) => {
    this.props.setPosition(value);
    this.props.calculateOffer(this.props.data.amountInterval.defaultValue);
  }

  render() {
    let skale = 0;
    let min = 0;
    let max = 100;
    let step = 1;
    if(this.props.data){
       const { data } = this.props;
       const position = this.props.currentPosition;


       skale = position || data.amountInterval.defaultValue;
       min = data.amountInterval.min
       max = data.amountInterval.max
       step = data.amountInterval.step
    }
   
    return(
         <div id="slidecontainer" >
         <h1>Amount</h1>
         <input type="text" value={skale} onChange={e => this.handleOnChange(e.target.value)}/>
         
           <Slider
            value={skale}
            min={min}
            max={max}
            step={step}
            orientation="horizontal"
            onChange={this.handleOnChange}
          />    
        </div>
      );
  }
}
