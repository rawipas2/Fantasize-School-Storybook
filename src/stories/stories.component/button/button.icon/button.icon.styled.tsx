import styled from "styled-components";

interface IButtonIconStyled {
    backgroundcolor: string
}
export const ButtonIconStyled = styled.div<IButtonIconStyled>`
  background-color: ${({ backgroundcolor }) => backgroundcolor || "#D9D9D9"};
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`