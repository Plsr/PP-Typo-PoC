import React, { Component } from 'react';
import Headline from './HeadlineElement.js';
import Paragraph from './ParagraphElement.js';

class TextContainer extends Component {
  render() {
    var cssStyles = {
      width: this.props.bodyWidth + "px",
      fontFamily: this.props.fontFamily,
      color: this.props.fgColor,
      backgroundColor: this.props.bgColor,
      padding: "20px"
    }

    return(
      <div className="text-container" style={cssStyles}>
        <Headline fontSize={this.props.h1Size} marginTop={this.props.h1MarginTop} marginBottom={this.props.h1MarginBottom} />
        <Paragraph fontSize={this.props.bodyTextOptions.bodyFontSize} lineHeight={this.props.lineHeight} />
        <Headline fontSize={this.props.h2Size} marginTop={this.props.h2MarginTop} marginBottom={this.props.h2MarginBottom} />
        <Paragraph fontSize={this.props.bodyTextOptions.bodyFontSize} lineHeight={this.props.lineHeight} />
        <Headline fontSize={this.props.h3Size} marginTop={this.props.h3MarginTop} marginBottom={this.props.h3MarginBottom} />
        <Paragraph fontSize={this.props.bodyTextOptions.bodyFontSize} lineHeight={this.props.lineHeight} />
      </div>
    );
  }
}

export default TextContainer;
