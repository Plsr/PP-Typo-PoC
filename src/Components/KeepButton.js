import React, { Component } from 'react';
import { Column } from 'react-foundation';

class KeepButton extends Component {
  render() {
    return (
      <Column small={12}>
        <label>
          <input type="checkbox" defaultChecked={this.props.keep}/>
          Keep this value
        </label>
      </Column>
    );
  }
}

export default KeepButton;
