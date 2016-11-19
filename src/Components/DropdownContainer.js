import React, { Component } from 'react';
import { Column } from 'react-foundation';
import ContainerHeadline from './ContainerHeadline.js'
import DropdownMenu from './DropdownMenu.js'

class DropdownContainer extends Component {
  render() {
    return(
      <Column small={this.props.size}>
        <ContainerHeadline name={this.props.name} />
        <DropdownMenu options={this.props.options} />
      </Column>
    );
  }
}

export default DropdownContainer;
