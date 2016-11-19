import React, { Component } from 'react';
import { Column } from 'react-foundation';

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

  render() {
    return(
      <Column small={12}>
        { this.renderStateIcon() }
        <span>Level {this.props.level}</span>
      </Column>
    );
  }
}

export default ContrastLevel;
