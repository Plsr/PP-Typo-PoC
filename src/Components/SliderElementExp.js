import React from 'react';
import { Column } from 'react-foundation';
import { connect } from 'react-redux'

let SliderElementExp = ({ dispatch, stateKey, value, minVal, maxVal, triggerAction }) => {
  return (
    <Column small={12}>
      <input
        type="range"
        min={minVal}
        max={maxVal}
        defaultValue={value}
        step="1"
        className="slider-element"
        onChange={e => {
            e.preventDefault()
            dispatch(triggerAction(stateKey, e.target.value))
          }
        }
      />
    </Column>
  );
}

export default connect()(SliderElementExp);
