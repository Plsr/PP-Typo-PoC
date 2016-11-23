import DropdownContainer from './DropdownContainer.js'
import { connect } from 'react-redux'
import SizeAdjustmentContainer from './SizeAdjustmentContainer.js'
import React from 'react';

let BodyTextOptions = ({ bodyTextOptions }) => {
  console.log(bodyTextOptions.bodyFontSize)

  return(
    <div>
      <DropdownContainer name={'Schriftart'} size={3} options={['Times new Roman', 'Verdana', 'Arial', 'Helvetica']} selected={bodyTextOptions.fontFamily} />
      <SizeAdjustmentContainer name={'Schriftgröße'} stateKey={"bodyFontSize"} value={bodyTextOptions.bodyFontSize} size={3} />
      <SizeAdjustmentContainer name={'Zeilenhöhe'} stateKey={"lineHeight"} value={bodyTextOptions.lineHeight} keep={true} size={3} />
      <SizeAdjustmentContainer name={'Laufweite'} stateKey={"bodyWidth"} value={bodyTextOptions.bodyWidth} keep={true} size={3} />
    </div>
  );

}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  };
}

export default connect(
  mapStateToProps
)(BodyTextOptions)

