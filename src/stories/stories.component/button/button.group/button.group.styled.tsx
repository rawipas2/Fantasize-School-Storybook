import styled from "styled-components";

export const ButtonGroupStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export const ButtonGroupTextStyled = styled.div`
  font-size: 16px;
`

export const ButtonGroupIconStyled = styled.div`
  font-size: 32px;
`

interface IButtonGroupBodyStyled {
    isactive: string
}
export const ButtonGroupBodyStyled = styled.div<IButtonGroupBodyStyled>`
  min-width: 230px;
  width: 100%;
  height: 80px;
  color: ${(props) => colorWithIsActive(props.isactive)};
  user-select: none;
  cursor: pointer;
  background: ${(props) => backgroundWithIsActive(props.isactive)};
  border: ${(props) => borderWithIsActive(props.isactive)};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: ${(props) => boxShadowWithIsActive(props.isactive)};

  &:hover {
    color: ${(props) => colorHoverWithIsActive(props.isactive)};
    border: 1px solid #50C4DB;
  }
`
// Color
const colorHoverWithIsActive = (isActive: string) : string => {
    if (isActive == "true")
        return "#FFFFFF"
    return "#50C4DB"
}
const colorWithIsActive = (isActive: string) : string => {
    if (isActive == "true")
        return "#FFFFFF"
    return "#BFBFBF"
}

// Background
const backgroundWithIsActive = (isActive: string) : string => {
    if (isActive == "true")
        return "#50C4DB"
    return "#FFFFFF"
}

// Border
const borderWithIsActive = (isActive: string) : string => {
    if (isActive == "true")
        return "1px solid #50C4DB"
    return "1px solid #BFBFBF"
}

// BoxShadow
const boxShadowWithIsActive = (isActive: string) : string => {
    if (isActive == "true")
        return "0 4px 10px rgba(5, 170, 204, 0.25)"
    return ""
}