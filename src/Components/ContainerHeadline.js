import React, { Component } from 'react';
import { Column } from 'react-foundation';

class ContainerHeadline extends Component {
  render() {
    return (
      <Column small={12}>
        <h2 style={{"wordWrap": "break-word"}}>{this.props.name}</h2>
      </Column>
    );
  }
}

export default ContainerHeadline;
