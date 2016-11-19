import React, { Component } from 'react';
import Headline from './HeadlineElement.js';
import Paragraph from './ParagraphElement.js';

class TextContainer extends Component {
  render() {
    var cssStyles = {
      width: this.props.bodyWidth
    }

    return(
      <div className="text-container" style={cssStyles}>
        <Headline fontSize={"36px"} marginTop={"30px"} marginBottom={"10px"} />
        <Paragraph fontSize={this.props.bodyFontSize} lineHeight={this.props.lineHeight} />
        <Headline fontSize={"24px"} marginTop={"20px"} marginBottom={"10px"} />
        <Paragraph fontSize={this.props.bodyFontSize} lineHeight={this.props.lineHeight} />
        <Headline fontSize={"18px"} marginTop={"15px"} marginBottom={"10px"} />
        <Paragraph fontSize={this.props.bodyFontSize} lineHeight={this.props.lineHeight} />
      </div>
    );
  }
}

export default TextContainer;
