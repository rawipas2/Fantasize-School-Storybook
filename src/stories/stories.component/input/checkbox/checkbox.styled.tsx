import styled from "styled-components";

interface ICheckboxStyled {
    ischecked?: string
}
export const CheckboxStyled = styled.div<ICheckboxStyled>`
  border-radius: 3px;
  width: 14px;
  height: 14px;
  font-size: 16px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    cursor: pointer;
    border: 2px solid #05AACC;
  }
  border: ${(props) => props.ischecked == "true"
          ? "2px solid #05AACC"
          : "2px solid #bfbfbf"};
  
  background-color: ${(props) => props.ischecked == "true" 
          ? "#05AACC" 
          : "#FFFFFF"};
`