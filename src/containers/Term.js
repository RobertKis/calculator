import React from 'react';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readFromConfig } from '../actions/index';
import { setTermPosition } from '../actions/index';

@connect(
  ({ reset, termPosition }) => ({
    data: reset.get('data'),
    currentPosition: termPosition.get('amount')
  }),
  dispatch => bindActionCreators({ readFromConfig, setTermPosition}, dispatch)
)
export default class Term extends React.Component {
  
  constructor(props, context) {
    console.log("sonstructor")
    super(props, context)
      this.props.readFromConfig();
    }

  handleOnChange = (value) => {
    this.props.setTermPosition(value);
  }

  handleChangetxt(e){
    this.props.setTermPosition(e.target.value);
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
       skale = position || data.termInterval.defaultValue;
       min = data.termInterval.min
       max = data.termInterval.max
       step = data.termInterval.step
    }
   
    return(
         <div id="slidecontainer" >
         <h1>Term</h1>
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
