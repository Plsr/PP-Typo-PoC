import DropdownContainer from './DropdownContainer.js'
import { connect } from 'react-redux'
import SizeAdjustmentContainer from './SizeAdjustmentContainer.js'
import SizeAdjustmentContainerExp from './SizeAdjustmentContainerExp.js'
import { changeHeadline2Option } from '../actions'
import { Column, Callout, Colors } from 'react-foundation';
import React from 'react';

let Headline1Options = ({ headline2Options }) => {

  return(
    <div>
      <SizeAdjustmentContainerExp
        name={'Schriftgröße'}
        stateKey={"h2Size"}
        triggerAction={changeHeadline2Option}
        value={headline2Options.h2Size}
        minVal={"8"}
        maxVal={"144"}
        size={4}
      />
      <SizeAdjustmentContainerExp
        name={'Abstand oben'}
        stateKey={"h2MarginTop"}
        triggerAction={changeHeadline2Option}
        value={headline2Options.h2MarginTop}
        minVal={"0"}
        maxVal={"200"}
        size={4}
      />
      <SizeAdjustmentContainerExp
        name={'Abstand unten'}
        stateKey={"h2MarginBottom"}
        triggerAction={changeHeadline2Option}
        value={headline2Options.h2MarginBottom}
        minVal={"0"}
        maxVal={"200"}
        size={4}
      />
      {headline2Options.errors.map(function(error, i) {
        return <Column small={12} key={i}><Callout color={Colors.ALERT}>{error}</Callout></Column>
      })}
    </div>
  );

}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    headline2Options: {
      ...state.headline2Options,
      errors: calculateErrors(state.headline2Options, state.bodyTextOptions, state.headline1Options.h1Size)
    }
  };
}

function calculateErrors(headline2Options, bodyTextOptions, h1Size) {
  var errors = []
  let bodyFontSize = bodyTextOptions.bodyFontSize
  let lineHeight = bodyTextOptions.lineHeight
  let h2Size = headline2Options.h2Size
  let marginTop = headline2Options.h2MarginTop
  let marginBottom = headline2Options.h2MarginBottom
  let typographicScale = [6,7,8,9,10,11,12,14,16,18,21,24,36,48,60,72]
  let h1ScalePos = getClosestValueFromScale(h1Size, typographicScale)
  let h1ScaleValue = typographicScale[h1ScalePos]
  let h2ScaleValue = typographicScale[h1ScalePos - 1]

  if(h2Size > h1Size) {
    errors.push("Headline 2 sollte nicht größer als Headline 1 sein")
  }
  if(h2Size < h2ScaleValue * 0.8) {
    errors.push("Headline 2 ist im Verhältnis zu Headline 1 sehr klein")
  }
  if(h2Size > h2ScaleValue * 1.2) {
    errors.push("Headline 2 ist im Verhältnis zu Headline 1 sehr groß")
  }
  if(marginBottom > (lineHeight * 1.5)) {
    errors.push("Headline 2 hat einen sehr großen Abstand nach unten")
  }
  if(marginBottom < lineHeight * 0.8) {
    errors.push("Headline 2 hat einen sehr kleinen Abstand nach unten")
  }
  if(marginTop > (lineHeight * 2.2)) {
    errors.push("Headline 2 hat einen sehr großen Abstand nach oben")
  }
  if(marginTop < (lineHeight * 1.8)) {
    errors.push("Headline 2 hat einen sehr kleinen Abstand nach oben")
  }
  return errors
}

function getClosestValueFromScale (exactValue, array) {
  for (var i = 0; i < array.length; i++) {

      if(array[i] == exactValue) {
        return i
      }
      // Check if the next bigger number was found
      if(array[i] > exactValue) {
        var upper = array[i]
        var lower = array[i - 1]

        // Calculate differences to upper and lower neighbour
        var upperDiff = upper - exactValue
        var lowerDiff = exactValue - lowerDiff

        // Determine which neighbour is the closest
        if(upperDiff > lowerDiff) {
          return i - 1
        } else {
          return i
        }
      }
    }

    // Return null if no match was found
    return null;
}

export default connect(
  mapStateToProps
)(Headline1Options)

