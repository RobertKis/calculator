import React from 'react';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readFromConfig } from '../actions/index';
import { setPosition } from '../actions/index';

@connect(
  ({ reset, position }) => ({
    data: reset.get('data'),
    currentPosition: position.get('amount')
  }),
  dispatch => bindActionCreators({ readFromConfig, setPosition}, dispatch)
)
export default class Amount extends React.Component {
  
  constructor(props, context) {
    console.log("sonstructor")
    super(props, context)
      this.props.readFromConfig();
    }

  handleOnChange = (value) => {
    this.props.setPosition(value);
  }

  handleChangetxt(e){
    this.props.setPosition(e.target.value);
  }

  render() {
    let skale = 0;
    let min = 0;
    let max = 100;
    let step = 1;
    if(this.props.data){
       const { data } = this.props;
       const position = this.props.currentPosition;
       
       console.log("position")
       console.log(position)
       skale = position || data.amountInterval.defaultValue;
       min = data.amountInterval.min
       max = data.amountInterval.max
       step = data.amountInterval.step
    }
   
    return(
         <div id="slidecontainer" >
         <h1>Amount</h1>
         <input type="text" value={skale} onChange={this.handleChangetxt.bind(this)}/>
         
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
