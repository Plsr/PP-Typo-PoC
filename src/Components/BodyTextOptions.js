import DropdownContainer from './DropdownContainer.js'
import { connect } from 'react-redux'
import SizeAdjustmentContainer from './SizeAdjustmentContainer.js'
import SizeAdjustmentContainerExp from './SizeAdjustmentContainerExp.js'
import { changeBodyOption } from '../actions'
import { Column, Callout, Colors } from 'react-foundation';
import React from 'react';

let BodyTextOptions = ({ bodyTextOptions }) => {
  console.log(bodyTextOptions.bodyFontSize)

  return(
    <div>
      <DropdownContainer name={'Schriftart'} size={3} options={['Times new Roman', 'Verdana', 'Arial', 'Helvetica']} selected={bodyTextOptions.fontFamily} />
      <SizeAdjustmentContainerExp name={'Schriftgröße'} stateKey={"bodyFontSize"} triggerAction={changeBodyOption} value={bodyTextOptions.bodyFontSize} size={3} />
      <SizeAdjustmentContainer name={'Zeilenhöhe'} stateKey={"lineHeight"} value={bodyTextOptions.lineHeight} keep={true} size={3} />
      <SizeAdjustmentContainer name={'Laufweite'} stateKey={"bodyWidth"} value={bodyTextOptions.bodyWidth} keep={true} size={3} />
      {bodyTextOptions.errors.map(function(error, i) {
        return <Column small='12'><Callout color={Colors.ALERT} key={i}>{error}</Callout></Column>
      })}
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

