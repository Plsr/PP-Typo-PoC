import React, { Component } from 'react';
import { Column } from 'react-foundation';
import ContainerHeadline from './ContainerHeadline.js'
import SliderElementExp from './SliderElementExp.js'
import ValueDisplay from './ValueDisplay.js'

class SizeAdjustmentContainerExp extends Component {
  render() {
    return (
      <Column small={this.props.size}>
        <ContainerHeadline name={this.props.name} />
        <SliderElementExp
          stateKey={this.props.stateKey}
          value={this.props.value}
          minVal={this.props.minVal}
          maxVal={this.props.maxVal}
          triggerAction={this.props.triggerAction}
          onChange={this.handleChange}
        />
        <ValueDisplay value={this.props.value} />
      </Column>
    );
  }
}

export default SizeAdjustmentContainerExp;
