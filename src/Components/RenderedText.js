import React, { Component } from 'react';
import TextContainer from './TextContainer.js';
import { Column } from 'react-foundation';

class RenderedText extends Component {
  render() {
    return (
      <Column small={12}>
        <TextContainer
          fontFamily={this.props.fontFamily}
          bodyFontSize={this.props.bodyFontSize}
          lineHeight={this.props.lineHeight}
          bodyWidth={this.props.bodyWidth}
          h1Size={this.props.h1Size}
          h1MarginTop={this.props.h1MarginTop}
          h1MarginBottom={this.props.h1MarginBottom}
          h2Size={this.props.h2Size}
          h2MarginTop={this.props.h2MarginTop}
          h2MarginBottom={this.props.h2MarginBottom}
          h3Size={this.props.h3Size}
          h3MarginTop={this.props.h3MarginTop}
          h3MarginBottom={this.props.h3MarginBottom}
          bgColor={this.props.bgColor}
          fgColor={this.props.fgColor}
        />
      </Column>
    );
  }
}

export default RenderedText;
