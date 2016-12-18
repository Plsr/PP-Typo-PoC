import React, { Component } from 'react';
import { Column, Callout, Colors } from 'react-foundation';

class ValueDisplay extends Component {
  render() {
    return (
      <Column small={12}>
        <Callout color={Colors.PRIMARY}>
          {this.props.value}px
        </Callout>
      </Column>
    );
  }
}

export default ValueDisplay;
