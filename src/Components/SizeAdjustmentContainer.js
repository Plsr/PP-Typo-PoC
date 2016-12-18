import React, { Component } from 'react';
import { Column } from 'react-foundation';
import ContainerHeadline from './ContainerHeadline.js'
import SliderElement from './SliderElement.js'

class SizeAdjustmentContainer extends Component {
  render() {
    return (
      <Column small={this.props.size}>
        <ContainerHeadline name={this.props.name} />
        <SliderElement
          stateKey={this.props.stateKey}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </Column>
    );
  }
}

export default SizeAdjustmentContainer;
