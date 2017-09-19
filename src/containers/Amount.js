import React from 'react';
import Slider from 'react-rangeslider';

export default class Amount extends React.Component {
  
  constructor(props, context) {
    super(props, context)
      this.state = {
        volume: 0
      }
    }

  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }

  handleChangetxt(e){
    console.log(e.target.value)
      this.setState({
        volume: e.target.value
    })
  }

  render() {
    let { volume } = this.state
    return(
         <div id="slidecontainer" >
         <input type="text" value={this.state.volume} onChange={this.handleChangetxt.bind(this)}/>
         
         
           <Slider
            value={volume}
            orientation="horizontal"
            onChange={this.handleOnChange}
          />    
        </div>
      );
  }
}
