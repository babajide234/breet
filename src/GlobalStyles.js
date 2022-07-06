import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${props => props.theme.colors.bg};
        font-family: ${props => props.theme.fontsFamily.primary};
    }
`
