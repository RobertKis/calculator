import React, { Component } from 'react';
import Amount from '../containers/Amount';
import Term from '../containers/Term';

export default class App extends Component {
  render() {
    return (
      <div>
      <Term />
        <Amount />
      </div>
              
    );
  }
}
