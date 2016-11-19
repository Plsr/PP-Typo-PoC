import React, { Component } from 'react';
import { Column } from 'react-foundation';

class SliderElement extends Component {

  render() {
    return (
      <Column small={12}>
        <input
          type="range"
          min="8"
          max="48"
          defaultValue={this.props.value}
          step="1"
          className="slider-element"
          ref="slider"
          onChange={this.handleChange}
        />
      </Column>
    );
  }
}

export default SliderElement;
