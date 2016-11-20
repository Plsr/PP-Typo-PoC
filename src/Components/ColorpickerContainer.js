import React from 'react';
import { Column } from 'react-foundation';
import { ChromePicker } from 'react-color';
import { changeValueForKey } from '../actions'
import { connect } from 'react-redux'

let ColorpickerContainer = ({ dispatch, size, name, color, stateKey }) => {
  const handleChange = (color, event) => {
    dispatch(changeValueForKey(stateKey, color.hex))
  }

  return(
    <Column small={ size }>
      <h2>{ name }</h2>
      <ChromePicker
        color={ color }
        onChange={handleChange}
      />
    </Column>
  );
}


export default connect()(ColorpickerContainer);
