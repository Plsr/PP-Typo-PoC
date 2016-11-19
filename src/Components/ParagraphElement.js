import React, { Component } from 'react';

class Paragraph extends Component {
  render() {
    var cssStyles = {
      fontSize: this.props.fontSize + "px",
      lineHeight: this.props.lineHeight + "px"
    }
    return (
      <p style={cssStyles}>Mew eat and than sleep on your face mrow lies down or find something else more interesting peer out window, chatter at birds, lure them to mouth for if it smells like fish eat as much as you wish. Vommit food and eat it again chase dog then run away yet intently stare at the same spot, for thinking longingly about tuna brine unwrap toilet paper vommit food and eat it again then cats take over the world. Has closed eyes but still sees you. Stare at ceiling poop on grasses climb a tree, wait for a fireman jump to fireman then scratch his face, and cats making all the muffins, and lick butt and make a weird face kitty scratches couch bad kitty. Sit in window and stare ooo, a bird!</p>
    );
  }
}

export default Paragraph;
