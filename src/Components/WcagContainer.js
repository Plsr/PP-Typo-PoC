import React, { Component } from 'react';
import { Column } from 'react-foundation';
import ContrastLevel from './ContrastLevel.js'

class WcagContainer extends Component {
  render() {
    return (
      <Column small={this.props.size}>
        <ContrastLevel level={'A'} passing={true} />
        <ContrastLevel level={'AA'} passing={true} />
        <ContrastLevel level={'AAA'} passing={false} />
      </Column>
    );
  }
}

export default WcagContainer;
