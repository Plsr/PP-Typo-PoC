import React, { Component } from 'react';
import Headline from './HeadlineElement.js';
import Paragraph from './ParagraphElement.js';

class TextContainer extends Component {
  render() {
    var cssStyles = {
      width: this.props.bodyTextOptions.bodyWidth + "px",
      fontFamily: this.props.bodyTextOptions.fontFamily,
      color: this.props.fgColor,
      backgroundColor: this.props.bgColor,
      padding: "20px"
    }

    return(
      <div className="text-container" style={cssStyles}>
        <Headline fontSize={this.props.headline1Options.h1Size} marginTop={this.props.headline1Options.h1MarginTop} marginBottom={this.props.headline1Options.h1MarginBottom} />
        <Paragraph fontSize={this.props.bodyTextOptions.bodyFontSize} lineHeight={this.props.bodyTextOptions.lineHeight} />
        <Headline fontSize={this.props.headline2Options.h2Size} marginTop={this.props.headline2Options.h2MarginTop} marginBottom={this.props.headline2Options.h2MarginBottom} />
        <Paragraph fontSize={this.props.bodyTextOptions.bodyFontSize} lineHeight={this.props.bodyTextOptions.lineHeight} />
        <Headline fontSize={this.props.headline3Options.h3Size} marginTop={this.props.headline3Options.h3MarginTop} marginBottom={this.props.headline3Options.h3MarginBottom} />
        <Paragraph fontSize={this.props.bodyTextOptions.bodyFontSize} lineHeight={this.props.bodyTextOptions.lineHeight} />
      </div>
    );
  }
}

export default TextContainer;
