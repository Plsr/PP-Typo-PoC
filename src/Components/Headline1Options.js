import DropdownContainer from './DropdownContainer.js'
import { connect } from 'react-redux'
import SizeAdjustmentContainer from './SizeAdjustmentContainer.js'
import SizeAdjustmentContainerExp from './SizeAdjustmentContainerExp.js'
import { changeHeadline1Option } from '../actions'
import { Column, Callout, Colors } from 'react-foundation';
import React from 'react';

let Headline1Options = ({ headline1Options }) => {

  return(
    <div>
      <SizeAdjustmentContainerExp
        name={'Schriftgröße'}
        stateKey={"h1Size"}
        triggerAction={changeHeadline1Option}
        value={headline1Options.h1Size}
        minVal={"8"}
        maxVal={"144"}
        size={4}
      />
      <SizeAdjustmentContainerExp
        name={'Abstand oben'}
        stateKey={"h1MarginTop"}
        triggerAction={changeHeadline1Option}
        value={headline1Options.h1MarginTop}
        minVal={"0"}
        maxVal={"200"}
        size={4}
      />
      <SizeAdjustmentContainerExp
        name={'Abstand unten'}
        stateKey={"h1MarginBottom"}
        triggerAction={changeHeadline1Option}
        value={headline1Options.h1MarginBottom}
        minVal={"0"}
        maxVal={"200"}
        size={4}
      />
      {headline1Options.errors.map(function(error, i) {
        return <Column small={12} key={i}><Callout color={Colors.ALERT}>{error}</Callout></Column>
      })}
    </div>
  );

}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    headline1Options: {
      ...state.headline1Options,
      errors: calculateErrors(state.headline1Options, state.bodyTextOptions)
    }
  };
}

function calculateErrors(headline1Options, bodyTextOptions) {
  var errors = []
  let bodyFontSize = bodyTextOptions.bodyFontSize
  var bodyFontConstant = 0
  let lineHeight = bodyTextOptions.lineHeight
  let h1Size = headline1Options.h1Size
  let marginTop = headline1Options.h1MarginTop
  let marginBottom = headline1Options.h1MarginBottom

  if(bodyFontSize > 14) {
    bodyFontConstant = (bodyFontSize - 14) / 10
  }

  let sizeConstraint = bodyFontSize * (1.68 + bodyFontConstant)

  if(h1Size < sizeConstraint * 0.8) {
    errors.push("Headline 1 ist im Verhältnis zum Text sehr klein")
  }
  if(h1Size > sizeConstraint * 1.2) {
    errors.push("Headline 1 ist im Verhältnis zum Text sehr groß")
  }
  if(marginBottom > (lineHeight * 1.7)) {
    errors.push("Headline 1 hat einen sehr großen Abstand nach unten")
  }
  if(marginBottom < lineHeight) {
    errors.push("Headline 1 hat einen sehr kleinen Abstand nach unten")
  }
  if(marginTop > (lineHeight * 2.7)) {
    errors.push("Headline 1 hat einen sehr großen Abstand nach oben")
  }
  if(marginTop < (lineHeight * 2)) {
    errors.push("Headline 1 hat einen sehr kleinen Abstand nach oben")
  }
  return errors
}

export default connect(
  mapStateToProps
)(Headline1Options)

