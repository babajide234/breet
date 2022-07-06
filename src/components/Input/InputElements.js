import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.bg};
    border-radius: ${props => props.theme.radii.edges};
    /* min-height: 64px; */
    height: 64px;
    width: 100%;
    overflow: hidden;    
`
export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.bg};
    border-radius: ${props => props.theme.radii.edges};
    width: 100%;
    overflow: hidden;
    height: fit-content;
    transition: all .3s ease-in-out;
    position: ${props => props.open ? 'absolute' :'' };
`
export const SelectValue = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    &:hover{
        cursor: pointer;
    }
`
export const SelectValueText = styled.h3`
    font-family: ${props => props.theme.fontsFamily.primary};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.text_color_1};
`
export const SelectValueArrow = styled.div`
    color: ${props => props.theme.colors.primary};
    font-size: 30px;
    svg{
        color: ${props => props.open ? '#00B42D' : props.theme.colors.primary};
        transition: all .3s ease-in-out;
        transform: ${props => props.open ?  'rotate(180deg)': ''};
        transform-origin: center center
    }
`
export const SelectOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${props => props.open ? 'inherit':'0px' };
    overflow: hidden;
    transition: all 1s ease-in-out;
`
export const SelectOption = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    overflow: hidden;
    &:hover{
        cursor: pointer;
        background-color: ${props => props.theme.colors.primary};
    }
    img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
`
export const SelectText  = styled.h3`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.small};
    color: ${props => props.theme.colors.text_color_black};
`

export const Input = styled.input`
    width: 100%;
    font-family: ${props => props.theme.fontsFamily.primary};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.medium};
    border: none;
    outline: none;
    padding: 20px 20px;
    &::placeholder{
        color: ${props => props.theme.colors.text_color_1};
    }
    &:focus {
    }
`