import styled from "styled-components";

export const Tab = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
 `
export const TabHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${props => props.theme.colors.bg};
    padding: 20px 26px;
    border-radius: ${props => props.theme.radii.edges};
    margin-bottom: 14px;
    &:hover{
        cursor: pointer;    
    }
    h1{
        font-family: ${ props => props.theme.fontsFamily.secondary};
        font-size: ${ props => props.theme.fontSizes.small};
        font-weight: ${ props => props.theme.fontWeights.small};
        color: ${ props => props.theme.colors.text_color_black};
    }
`
export const TabContent = styled.div`
    width: 95%;
    margin: 0px auto;
    height: ${props => props.open ? 'inherit':'0px' };
    overflow: hidden;
    /* background-color: #fff; */
    border-radius: 10px;
    transition: all .3s ease-in-out;
`

export const TabIcon = styled.div`
    font-size:30px;
    position: relative;
    svg{
        color: ${props => props.open ? '#00B42D' : props.theme.colors.primary};
        transition: all .3s ease-in-out;
        transform: ${props => props.open ?  'rotate(90deg)': ''};
        transform-origin: center center
    }
`
export const Tooltip = styled.div`
    position: absolute;
    top: 0px;
    right: -170px;
    background-color: ${props => props.theme.colors.secondary};
    color: #fff;
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.small};
    padding: 8px 30px;
    border-radius:  ${props => props.theme.radii.small};
    text-align: center;
    transition: all .5s linear;
    /* display: ${props => props.open ? 'block': 'none'}; */
    opacity: ${props => props.open ? '1': '0'};

    &:before{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-right: 20px solid ${props => props.theme.colors.secondary};
        border-bottom: 10px solid transparent;
        border-left: 10px solid transparent;
        top: 8px;
        left: -25px;
    }

`