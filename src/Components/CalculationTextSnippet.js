import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateBodyWidthContraints } from '../actions'

class CalculationTextSnippet extends Component {

  componentDidUpdate(prevProps, prevState) {
    // Get snippet DOM Element
    let snippet = this.refs.calculationSnippet

    // Get width of rendered DOM node
    let elementWidth = snippet.getBoundingClientRect().width

    // Get length (in terms of characters) of element content
    let elementLength = snippet.innerHTML.length

    // Get number of chars per pixel
    let charsPerPixel = elementLength / elementWidth

    // Calculate min an max width
    let minWidth = Math.floor(65 / charsPerPixel)
    let maxWidth = Math.floor(75 / charsPerPixel)

    // Update state
    this.props.dispatch(updateBodyWidthContraints(minWidth, maxWidth))

  }

  render () {

    var cssStyles = {
     fontSize: this.props.fontSize + 'px',
     fontFamily: this.props.fontFamily
    }

    return(
      <div style={cssStyles}>
        <p ref="calculationSnippet" className="a-calculation-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et nibh euismod, dapibus elit vel, tincidunt massa.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fontSize: state.bodyTextOptions.bodyFontSize,
    fontFamily: state.bodyTextOptions.fontFamily
  };
}

export default CalculationTextSnippet = connect(
  mapStateToProps
)(CalculationTextSnippet)
