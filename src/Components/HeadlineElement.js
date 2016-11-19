import React, { Component } from 'react';

class Headline extends Component {
  render() {
    var cssStyles = {
      fontSize: this.props.fontSize,
      marginTop: this.props.marginTop,
      marginBottom: this.props.marginBottom
    }

    return(
      <h1 style={cssStyles}>Climb a tree</h1>
    );
  }
}

export default Headline;
