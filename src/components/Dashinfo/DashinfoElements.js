import styled from "styled-components";

export const DashinfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 34px;
`
export const SalesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`
export const SalesHeader = styled.h3`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.head};
    font-weight: ${props => props.theme.fontWeights.medium};
    margin-bottom: 21px;
    color: ${props => props.theme.colors.text_color_3};
`
export const SalesList = styled.div`
    width: 100%;
    `
export const SaleUp = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    `
export const SaleDown = styled.div`
    display: flex;
    justify-content: space-between;
    `
export const SalesItem = styled.div`
    display: flex;
    width: 100%;
    padding: 12px 20px;
    position: relative;
    &:hover {
        cursor: pointer;
        box-shadow: ${props => props.theme.shadows.box_shadow};
        border-radius: ${props => props.theme.radii.small};
    }
`
export const SaleIconContainer = styled.div`
    height: 54px;
    width: 54px;
    border-radius: ${props => props.theme.radii.round};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    font-size: 34px;
    color: ${props => props.theme.colors.text_color_white};
    margin-right: 10px;

`
export const SaleInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 75%;
`
export const SaleTitle = styled.h4`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.text_color_3};
    margin-bottom: 5px;

`
export const SaleSubtitle = styled.h3`
    color: ${props => props.theme.colors.text_color_4};
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.small};
    text-transform: uppercase;
`
export const SalesDetails = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #F5FAFF;
    padding-top: 20px;
    margin-top: 20px;
    width: 100%;
`
export const SalesTotal = styled.h3`
     color: ${props => props.theme.colors.text_color_4};
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.small};
    text-transform: capitalize;
`
export const SalePrice = styled.h3`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.text_color_3};
    /* margin-bottom: 5px; */
    /* margin-bottom: 5px; */
`

// recent sales

export const RecentContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const RecentHeader = styled.div`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.head};
    font-weight: ${props => props.theme.fontWeights.medium};
    margin-bottom: 21px;
    color: ${props => props.theme.colors.text_color_3};
`
export const RecentItem = styled.div``
export const RecentIconContainer = styled.div`
    height: 54px;
    width: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.radii.edges};
    font-size: 34px;
    color: ${props => props.theme.colors.text_color_white};
    margin-right: 10px;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colors.bg_3};
        border-radius: ${props => props.theme.radii.edges};
        opacity: 0.1;
    }
`
export const RecentInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 75%;
`
export const RecentTitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const RecentTitleText = styled.h3`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.text_color_3};
    margin-bottom: 5px;
`
export const RecentSubtitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const RecentSubtitleText = styled.div`
    color: ${props => props.theme.colors.text_color_4};
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.very_small};
    font-weight: ${props => props.theme.fontWeights.small};
    display: flex;
    align-items: center;
    /* width: 50%; */
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    span{
        height: 6px;
        width: 6px;
        border-radius: 50%;
        background-color: #05E285;
        margin-right: 6px;
        display: block;
    }    
`
export const RecentSubtitleText2 = styled.h3`
    color: ${props => props.theme.colors.text_color_4};
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.very_small};
    font-weight: ${props => props.theme.fontWeights.small};
`
export const Icon = styled.img`
    width: 50%;
    height: 50%;
`
export const Recentupicon = styled.div`
height: 22px;
width: 22px;
border-radius: ${props => props.theme.radii.round};
background-color: ${props => props.theme.colors.secondary};
position: absolute;
top: -5px;
right: -5px;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 8px;
    height: 10px;

}
`
export const Button = styled.button`
    background-color:transparent;
    outline: none;
    border: none;
    margin:0px auto;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    color: #8795B4;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        color: ${props => props.theme.colors.text_color_3};
    }
    svg{
        margin-left:6px;
    }
`

export const Date = styled.span`
    font-family: ${props => props.theme.fontsFamily.secondary};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.text_color_3};
    position: absolute;
    top: -10px;
    left: 25px;
    
    
`