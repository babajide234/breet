import React from 'react'
import { DashinfoContainer } from './DashinfoElements';
import Recent from './Recent';
import Sales from './Sales';
import { NavHeader } from './../NavHeader/index';

const Dashinfo = () => {
  return (
    <>
        <DashinfoContainer>
            <NavHeader/>
            <Sales/>
            <Recent/>
        </DashinfoContainer>
    </>
  )
}

export default Dashinfo