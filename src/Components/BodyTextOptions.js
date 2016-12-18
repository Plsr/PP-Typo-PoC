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
      <DropdownContainer
        name={'Schriftart'}
        size={3}
        options={['Times New Roman', 'Verdana', 'Arial', 'Helvetica']}
        selected={bodyTextOptions.fontFamily}
      />
      <SizeAdjustmentContainerExp
        name={'Schriftgröße'}
        stateKey={"bodyFontSize"}
        triggerAction={changeBodyOption}
        value={bodyTextOptions.bodyFontSize}
        minVal={"8"}
        maxVal={"72"}
        size={3}
      />
      <SizeAdjustmentContainerExp
        name={'Zeilenhöhe'}
        stateKey={"lineHeight"}
        triggerAction={changeBodyOption}
        value={bodyTextOptions.lineHeight}
        minVal={"4"}
        maxVal={"144"}
        keep={true}
        size={3}
      />
      <SizeAdjustmentContainerExp
        name={'Laufweite'}
        stateKey={"bodyWidth"}
        triggerAction={changeBodyOption}
        value={bodyTextOptions.bodyWidth}
        minVal={"100"}
        maxVal={"1200"}
        keep={true}
        size={3}
      />
      {bodyTextOptions.errors.map(function(error, i) {
        return <Column small={12} key={i}><Callout color={Colors.ALERT}>{error}</Callout></Column>
      })}
    </div>
  );

}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    bodyTextOptions: {
      ...state.bodyTextOptions,
      errors: calculateErrors(state.bodyTextOptions, state.bodyWidthConstraints)
    }
  };
}

function calculateErrors(bodyTextOptions, bodyWidthConstraints) {
  var errors = []
  let bodyFontSize = bodyTextOptions.bodyFontSize
  let lineHeight = bodyTextOptions.lineHeight
  let bodyWidth = bodyTextOptions.bodyWidth
  let bodyMinWidth = bodyWidthConstraints.min
  let bodyMaxWidth = bodyWidthConstraints.max
  var lineHeightPercentage = (lineHeight / bodyFontSize) * 100

  console.log(lineHeightPercentage) // DEBUG

  if(bodyFontSize < 9) {
    errors.push("Die Textgröße ist sehr klein und könnte schwer lesbar sein")
  }
  if(bodyFontSize > 24) {
    errors.push("Die Textgröße ist sehr groß und könnte schwer lesbar sein")
  }
  if(lineHeightPercentage < 120.0) {
    errors.push("Die Zeilenhöhe ist sehr niedrig und könnte den Text schwer lesbar machen")
  }
  if(lineHeightPercentage > 180.0) {
    errors.push("Die Zeilenhöhe ist sehr hoch und könnte den Text schwer lesbar machen")
  }
  if(bodyWidth < bodyMinWidth) {
    errors.push("Der Text ist sehr schmal und könnte dadurch schwerer lesbar sein")
  }
  if(bodyWidth > bodyMaxWidth) {
    errors.push("Der Text ist sehr breit und könnte dadurch schwerer lesbar sein")
  }
  return errors
}

export default connect(
  mapStateToProps
)(BodyTextOptions)

