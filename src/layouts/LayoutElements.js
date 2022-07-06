
import styled from "styled-components";

export const DashContainer = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 260px 680px 1fr;
    padding: 22px 0px 25px 0px;
    `
export const SideBar = styled.div`
    padding: 56px 32px ;
`
export const MainContainer = styled.div`
    background-color: ${props => props.theme.colors.bg_2};
    border-radius: ${props => props.theme.radii.bg_edges};
    padding: 28px 24px;
`
export const RightContent = styled.div`

`
export const Stack = styled.div`
    display: flex;
    width: 100%;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`
