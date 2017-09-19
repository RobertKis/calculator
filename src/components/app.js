import React, { Component } from 'react';
import Amount from '../containers/Amount';
import Term from '../containers/Term';
import OfferDetails from '../containers/offerDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        <Amount />
        <Term />
        <OfferDetails />
      </div>
    );
  }
}
