import React, { Component } from 'react';
import { Column, Callout, Colors } from 'react-foundation';

var FaClose = require('react-icons/lib/fa/close');
var FaCheck = require('react-icons/lib/fa/check');

class ContrastLevel extends Component {
  renderStateIcon() {
    if (this.props.passing){
      return(
        <FaCheck />
      );
    } else {
      return (
        <FaClose />
      );
    }
  }

  calloutColor() {
    if (this.props.passing){
      return(
        Colors.SUCCESS
      );
    } else {
      return (
       Colors.ALERT
      );
    }
  }

  render() {
    return(
      <Column small={12}>
        <Callout color={this.calloutColor()}>
          { this.renderStateIcon() }
          <span>Level {this.props.level}</span>
        </Callout>
      </Column>
    );
  }
}

export default ContrastLevel;
