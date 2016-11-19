import React, { Component } from 'react';
import { Column } from 'react-foundation';
import { ChromePicker } from 'react-color';

class ColorpickerContainer extends Component {
  state = {
    color: this.props.color
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return(
      <Column small={this.props.size}>
        <h2>{this.props.name}</h2>
        <ChromePicker
          color={ this.state.color }
          onChangeComplete={ this.handleChangeComplete }
        />
      </Column>
    );
  }
}

export default ColorpickerContainer;
