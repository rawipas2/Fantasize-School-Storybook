import styled from "styled-components";

export const AppbarProfileStyled = styled.div`
  display: grid;
  height: 100px;
  grid-template-columns: 280px;
  color: #7B7B7C;
  font-size: 20px;
  align-content: center;
`

export const AppbarProfileBodyStyled = styled.div`
  display: flex;
  gap: 24px;
  cursor: pointer;
  user-select: none;`

export const AppbarProfileImageStyled = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 50%;
`

export const AppbarProfileUserCardStyled = styled.div`
  display: grid;
  grid-row-gap: 5px;
`

export const AppbarProfileUserNameStyled = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
`

export const AppbarProfileDescriptionStyled = styled.div`
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
`

export const AppbarProfileMenuStyled = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  display: grid;
  grid-row-gap: 16px;
  padding-left: 10px;
  padding-right: 10px;
  grid-template-columns: 280px;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
`

export const AppbarDividerStyled = styled.div`
  height: 1px;
  width: 100%;
  background-color: #DEDEDF;
`

export const AppbarProfileMenuSlotStyled =styled.div`
  display: grid;
  grid-template-columns: 1px 16px 1fr;
  height: 40px;
  grid-column-gap: 10px;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  color: #000000;

  &:hover {
    background-color: #E6F7FA;
  }
`