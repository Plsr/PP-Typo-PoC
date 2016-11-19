import TextContainer from './TextContainer.js';
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  console.log("called")
  return {
    ...state,
    fontFamily: state.fontFamily
  };
}

const RenderedText = connect(
  mapStateToProps
)(TextContainer)

export default RenderedText
