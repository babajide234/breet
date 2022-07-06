import React from 'react'
import { ToggleContainer,Switch, SwitchBtn } from './ToggleElements';
// import {IoEllipseOutline} from 'react-icons/io'
import {BsDash,BsCircle} from 'react-icons/bs'
const Toggle = ({label}) => {
  return (
    <ToggleContainer>
        <input type="checkbox" className="checkbox" name={label} id={label} />
        <Switch htmlFor={label}>
            <BsDash/>
            <BsCircle/>
            <SwitchBtn/>
        </Switch>
    </ToggleContainer>
  )
}

export default Toggle