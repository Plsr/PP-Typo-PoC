import React, { Component } from 'react';
import { Column } from 'react-foundation';
import ContainerHeadline from './ContainerHeadline.js'
import SliderElement from './SliderElement.js'
import KeepButton from './KeepButton.js'

class SizeAdjustmentContainer extends Component {
  render() {
    return (
      <Column small={this.props.size}>
        <ContainerHeadline name={this.props.name} />
        <SliderElement value={this.props.value} />
        <KeepButton keep={this.props.keep} />
      </Column>
    );
  }
}

export default SizeAdjustmentContainer;
