import styled from "styled-components";

export const TextfieldSelectorStyled = styled.div`
  cursor: pointer;
  display: grid;
  input {
    cursor: pointer;
    &:focus {
      cursor: text;
    }
  }
`

export const TextfieldSelectorMenuStyled = styled.div`
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 16px;
  &:hover {
    background-color: #e6f7fa;
  }
`

export const TextfieldSelectorCardStyled = styled.div`
  background: white; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25); 
  border-radius: 10px; 
  border: 1px #D9D9D9 solid;
  overflow: hidden;
  position: absolute;
  margin-top: 55px;
  z-index: 1;
`