import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 630px;
    border-radius: ${props => props.theme.radii.edges};
    background-color: ${props => props.theme.colors.bg};
    padding: 25px 26px;
    margin-bottom: 34px;
`
export const HeaderTitle = styled.div`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.text_color_1};
    display: flex;
    align-items: center;
`
export const Status = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.text_color_1};
    margin-right: 10px;
`
export const Title = styled.h3`
    font-family: ${props => props.theme.fontsFamily.primary};
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.text_color_2};
    text-align: left;
    margin-bottom: 34px;
`