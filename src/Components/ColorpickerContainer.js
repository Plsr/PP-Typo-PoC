import React, { Component } from 'react';
import { Column } from 'react-foundation';
import { ChromePicker } from 'react-color';

class ColorpickerContainer extends Component {
  render() {
    return(
      <Column small={this.props.size}>
        <h2>{this.props.name}</h2>
        <ChromePicker />
      </Column>
    );
  }
}

export default ColorpickerContainer;
