import React from 'react';
import { Column } from 'react-foundation';
import { changeValueForKey } from '../actions'
import { connect } from 'react-redux'

let SliderElement = ({ dispatch, stateKey, value }) => {
  return (
    <Column small={12}>
      <input
        type="range"
        min="8"
        max="48"
        defaultValue={value}
        step="1"
        className="slider-element"
        onChange={e => {
            e.preventDefault()
            dispatch(changeValueForKey(stateKey, e.target.value))
          }
        }
      />
    </Column>
  );
}

export default connect()(SliderElement);
