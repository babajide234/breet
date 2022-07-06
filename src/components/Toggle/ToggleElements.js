import styled from "styled-components";

export const Switch = styled.label`
  width: 100%;
  height: 33px;
  background-color: ${props => props.theme.colors.gray};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg{
    width: 50%;
    z-index: 1000;
    color: ${props => props.theme.colors.text_color_white};
    font-weight: bolder;
    font-size: 18px;
  }
  &:hover{
    cursor: pointer;
  }
`
export const SwitchBtn = styled.div`
        content: '';
        position: absolute;
        width: 50%;
        height: 33px;
        top: 0;
        left: 0;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 5px;

    `
export const ToggleContainer = styled.div`
      position: relative;
      width: 75px;
      display: flex;
    .checkbox {
        display: none;
    }
    .checkbox:checked ~ ${Switch} {
        ${SwitchBtn}{
            &::before {
                right: 0px;
            }
        }
        svg{
            color: ${props => props.theme.colors.secondary};
        }
    }
    .checkbox:checked ~ ${Switch}  ${SwitchBtn}{
        &::before {
            right: 0px;
        }
    }
`