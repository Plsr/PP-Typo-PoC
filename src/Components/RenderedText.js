import React, { Component } from 'react';
import TextContainer from './TextContainer.js';
import { Column } from 'react-foundation';

class RenderedText extends Component {
  render() {
    return (
      <Column small={12}>
        <TextContainer width={this.props.width} bodyFontSize={this.props.bodyFontSize} />
      </Column>
    );
  }
}

export default RenderedText;
