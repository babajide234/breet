import React, { useEffect } from 'react'
import { 
    SideLogo, 
    LogoContainer, 
    SideBarTitle, 
    Menu,MenuItem, 
    MenuItemIcon, 
    MenuItemIconImage,
    MenuItemText,
    LogoutContainer,
    LogoutIcon,
    LogoutText,
    MenuLine
 } from './sidebarElements'
import Logo from '../../assets/logo.png'
import DashboardIcon from '../../assets/Union.svg'
import { BsFillGridFill, BsArrowUpRight} from 'react-icons/bs';
import { menu } from './../../utils/constants';

import {useParams,useLocation} from 'react-router-dom';
const Sidebar = () => {
    const [isActive, setIsActive] = React.useState(false);
    const [path, setPath] = React.useState('');
    const {id}=useParams();
    const location = useLocation()



    const handleClick = () => {}

    useEffect(() => {
        console.log(location.pathname);
    },[location])
  return (
    <>
        <LogoContainer>
            <SideLogo src={Logo}/>
        </LogoContainer>
        <SideBarTitle>Menu</SideBarTitle>
        <Menu>
            {
                menu.map((item, index) => {
                    return (
                        !item.submenu ? (
                            <MenuItem key={index} to={item.path}>
                                <MenuItemIcon>
                                    <MenuItemIconImage>{item.icon}</MenuItemIconImage>
                                </MenuItemIcon>
                                <MenuItemText>{item.name}</MenuItemText>
                            </MenuItem>
                        ):(
                            <MenuLine>
                            {
                                item.submenu.map((subitem, subindex) => (
                                    <MenuItem  key={subindex} to={subitem.path}>
                                        <MenuItemIcon>
                                            <MenuItemIconImage>{subitem.icon}</MenuItemIconImage>
                                        </MenuItemIcon>
                                        <MenuItemText>{subitem.name}</MenuItemText>
                                    </MenuItem>
                                ))
                            }
                            </MenuLine>
                        )
                    )
                })
            }
        </Menu>
        <LogoutContainer>
            <LogoutIcon><BsArrowUpRight/></LogoutIcon>
            <LogoutText>Log out</LogoutText>
        </LogoutContainer>
    </>
  )
}

export default Sidebar