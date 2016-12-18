import React, { Component } from 'react';
import { Column } from 'react-foundation';
import ContainerHeadline from './ContainerHeadline.js'
import SliderElementExp from './SliderElementExp.js'
import KeepButton from './KeepButton.js'

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
        <KeepButton keep={this.props.keep} />
      </Column>
    );
  }
}

export default SizeAdjustmentContainerExp;
