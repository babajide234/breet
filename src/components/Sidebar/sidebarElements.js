import styled from "styled-components";
import {Link} from "react-router-dom";

export const SideLogo   = styled.img`

`
export const SideBarActive = styled.div`
    height: 24px;
    width: 55px;
    background-color: ${props => props.theme.colors.bg_2};
`;
export const SideBarTitle = styled.h2`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.very_small};
    font-weight: ${props => props.theme.fontWeights.small};
    line-height: ${props => props.theme.lineHeights.very_small};
    color: ${props => props.theme.colors.text_color_2};
    font-style: normal;
    letter-spacing: 1.2px;
    text-align: left;
    opacity: 0.7;
    text-transform: uppercase;
    margin-bottom: 24px;

`
export const LogoContainer = styled.div`
    margin-bottom: 56px;
`
export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    `
export const MenuLine = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 0px;
    padding-top: 36px;
    border-top: 2px solid #F5FAFF;
`
export const MenuItemIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
position: relative;
margin-right: 16px;
&::after {
    content: '';
    position: absolute;
    background-color: ${props => props.theme.colors.primary};
    border-radius:  ${props => props.theme.radii.box_edge};
    opacity: 0.08;
    width: 100%;
    height: 100%;
    z-index: 1;
}

`
export const MenuItemIconImage = styled.div`
    z-index: 10;
    svg{
        color:${props => props.theme.colors.primary};
        width: 13px;
        height: 13px;
        z-index: 10;
    }
`
export const LogoutIcon = styled.div`
    height: 25px;
    width: 25px;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.radii.round};
    margin-right: 20px;
    margin-left: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 900;
    color: ${props => props.theme.colors.primary};
`
export const LogoutText = styled.h3`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.small};
    line-height: ${props => props.theme.lineHeights.small};
    color: ${props => props.theme.colors.primary};
    text-transform: capitalize;
`
export const LogoutContainer = styled.div`
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`
export const MenuItemText = styled.h3`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.small};
    font-size: ${props => props.theme.fontSizes.small};
    line-height: ${props => props.theme.lineHeights.small};
    color: ${props => props.theme.colors.text_color_1};
`

export const MenuItem = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
    text-decoration: none;
    &:hover{
        cursor: pointer;
        ${MenuItemIconImage}{
            svg {
                color:${props => props.theme.colors.text_color_white}; 
            }
        }
        ${MenuItemText}{
            color:${props => props.theme.colors.text_color_2};
        }
        ${MenuItemIcon}{
            &::after {
                background-color: ${props => props.theme.colors.primary};
                opacity: 1;
            }
        }
    }
    
`
