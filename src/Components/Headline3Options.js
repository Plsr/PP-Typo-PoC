import DropdownContainer from './DropdownContainer.js'
import { connect } from 'react-redux'
import SizeAdjustmentContainer from './SizeAdjustmentContainer.js'
import SizeAdjustmentContainerExp from './SizeAdjustmentContainerExp.js'
import { changeHeadline3Option } from '../actions'
import { Column, Callout, Colors } from 'react-foundation';
import { getClosestValueFromScale } from '../helpers'
import React from 'react';

let Headline1Options = ({ headline3Options }) => {

  return(
    <div>
      <SizeAdjustmentContainerExp
        name={'Schriftgröße'}
        stateKey={"h3Size"}
        triggerAction={changeHeadline3Option}
        value={headline3Options.h3Size}
        minVal={"8"}
        maxVal={"144"}
        size={4}
      />
      <SizeAdjustmentContainerExp
        name={'Abstand oben'}
        stateKey={"h3MarginTop"}
        triggerAction={changeHeadline3Option}
        value={headline3Options.h3MarginTop}
        minVal={"0"}
        maxVal={"200"}
        size={4}
      />
      <SizeAdjustmentContainerExp
        name={'Abstand unten'}
        stateKey={"h3MarginBottom"}
        triggerAction={changeHeadline3Option}
        value={headline3Options.h3MarginBottom}
        minVal={"0"}
        maxVal={"200"}
        size={4}
      />
      {headline3Options.errors.map(function(error, i) {
        return <Column small={12} key={i}><Callout color={Colors.ALERT}>{error}</Callout></Column>
      })}
    </div>
  );

}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    headline3Options: {
      ...state.headline3Options,
      errors: calculateErrors(state.headline3Options, state.bodyTextOptions, state.headline1Options.h1Size, state.headline2Options.h2Size)
    }
  };
}

function calculateErrors(headline3Options, bodyTextOptions, h1Size, h2Size) {
  var errors = []
  let bodyFontSize = bodyTextOptions.bodyFontSize
  let lineHeight = bodyTextOptions.lineHeight
  let h3Size = headline3Options.h3Size
  let marginTop = headline3Options.h3MarginTop
  let marginBottom = headline3Options.h3MarginBottom
  let typographicScale = [6,7,8,9,10,11,12,14,16,18,21,24,36,48,60,72]
  let h2ScalePos = getClosestValueFromScale(h2Size, typographicScale)
  let h3ScaleValue = typographicScale[h2ScalePos - 1]

  if(h3Size > h2Size) {
    errors.push("Headline 3 sollte nicht größer als Headline 2 sein")
  }
  if(h3Size > h1Size) {
    errors.push("Headline 3 sollte nicht größer als Headline 1 sein")
  }
  if(h3Size < h3ScaleValue * 0.9) {
    errors.push("Headline 3 ist im Verhältnis zu Headline 2 sehr klein")
  }
  if(h3Size > h3ScaleValue * 1.1) {
    errors.push("Headline 3 ist im Verhältnis zu Headline 2 sehr groß")
  }
  if(marginBottom > (lineHeight * 0.7)) {
    errors.push("Headline 3 hat einen sehr großen Abstand nach unten")
  }
  if(marginBottom < lineHeight * 0.3) {
    errors.push("Headline 3 hat einen sehr kleinen Abstand nach unten")
  }
  if(marginTop > (lineHeight * 1.7)) {
    errors.push("Headline 3 hat einen sehr großen Abstand nach oben")
  }
  if(marginTop < (lineHeight * 1.3)) {
    errors.push("Headline 3 hat einen sehr kleinen Abstand nach oben")
  }
  return errors
}



export default connect(
  mapStateToProps
)(Headline1Options)

