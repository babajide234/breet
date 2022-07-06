import styled from "styled-components";

export const NavHeaderContainer = styled.div`
    margin: 50px 0px;
    display: flex;
    justify-content: space-between;
`
export const NavHeaderNotification = styled.div`
    height: 32px;
    width: 32px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${props => props.theme.radii.small};
        background-color: ${props => props.theme.colors.primary};
        opacity: .1;
    }
    svg{
        color: #324168;
        position: relative;
    }
    
    &::before{
        content: '';
        position: absolute;
        top: 10px;
        left: 18px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #FF278F;
        z-index: 100;
    }
`
export const NavHeaderMenuItem = styled.div`
    display: flex;
    align-items: center;
`
export const NavHeaderAvatar = styled.div`
    height: 32px;
    width: 32px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    img{
        width: 90%;
    }
    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.primary};
        opacity: .1;
    }
`
export const NavHeaderMenuItemText = styled.div`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.secondary};
    margin-right: 12px;
`