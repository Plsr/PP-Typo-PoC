import TextContainer from './TextContainer.js';
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  };
}

const RenderedText = connect(
  mapStateToProps
)(TextContainer)

export default RenderedText
