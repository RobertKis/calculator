import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

@connect(
  ({ offer }) => ({
    data: offer.get('offer')
  }),
  () => {}
)
export default class OfferDetails extends React.Component{
	render(){
	console.log('this.props.data')
	console.log(this.props.data)
		return(
				<div id = "wrapper">
					<p><span>Total principal:</span>
						<span></span>
					</p>
					<p><span>Total cost of credit:</span>
						<span></span>
					</p>
					<p><span>Total repayable ammount:</span>
						<span></span>
					</p>
					<p><span>Monthly payment:</span>
						<span></span>
					</p>
				</div>
			)
	}
}