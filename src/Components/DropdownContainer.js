import React from 'react';
import { Column } from 'react-foundation';
import ContainerHeadline from './ContainerHeadline.js'
import DropdownMenu from './DropdownMenu.js'




let DropdownContainer = ({ name, selected, options, size }) => {

  return(
    <Column small={size}>
      <ContainerHeadline name={name} />
      <DropdownMenu options={options} selected={selected} />
    </Column>
  );
}

export default DropdownContainer;
