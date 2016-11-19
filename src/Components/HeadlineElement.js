import React, { Component } from 'react';

class Headline extends Component {
  render() {
    var cssStyles = {
      fontSize: this.props.fontSize + "px",
      marginTop: this.props.marginTop + "px",
      marginBottom: this.props.marginBottom + "px"
    }

    return(
      <h1 style={cssStyles}>Climb a tree</h1>
    );
  }
}

export default Headline;
