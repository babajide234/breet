import React from 'react'
import { NavHeaderAvatar, NavHeaderContainer, NavHeaderMenuItem, NavHeaderMenuItemText, NavHeaderNotification } from './NavHeaderElements';
import { BsBellFill, BsChevronDown} from 'react-icons/bs';
import Avatar from '../../assets/29.png'
export const NavHeader = () => {
  return (
    <NavHeaderContainer>
        <NavHeaderNotification>
            <BsBellFill/>
        </NavHeaderNotification>
        <NavHeaderMenuItem>
            <NavHeaderAvatar>
                <img src={Avatar} alt="" />
            </NavHeaderAvatar>
            <NavHeaderMenuItemText>Chika Uzoh</NavHeaderMenuItemText>
            <BsChevronDown/>
        </NavHeaderMenuItem>
    </NavHeaderContainer>
  )
}
