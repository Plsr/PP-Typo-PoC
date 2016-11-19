import React, { Component } from 'react';
import { Column } from 'react-foundation';

class DropdownMenu extends Component {
  render() {
    return(
      <Column small={12}>
        <select>
          {this.props.options.map(function(option) {
            return <option value={option} key={option}>{option}</option>
          })}
        </select>
      </Column>
    );
  }
}

export default DropdownMenu;
