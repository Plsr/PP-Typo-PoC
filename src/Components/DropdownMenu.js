import React from 'react';
import { Column } from 'react-foundation';
import { changeFontFamily } from '../actions'
import { connect } from 'react-redux'

let DropdownMenu = ({ dispatch, selected, options }) => {

  return(
    <Column small={12}>
      <select
        defaultValue={selected}
        onChange={e => {
          e.preventDefault()
          dispatch(changeFontFamily(e.target.value))}
        }
      >
        {options.map(function(option) {
          return <option value={option} key={option}>{option}</option>
        })}
      </select>
    </Column>
  );
}

export default connect()(DropdownMenu);
