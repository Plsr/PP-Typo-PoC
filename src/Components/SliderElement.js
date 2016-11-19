import React, { Component } from 'react';
import { Column } from 'react-foundation';

class SliderElement extends Component {
  // TODO: Remove 'px' from value property
  render() {
    return (
      <Column small={12}>
        <input type="range" min="8" max="48" defaultValue={this.props.value} step="1" className="slider-element" />
      </Column>
    );
  }
}

export default SliderElement;
