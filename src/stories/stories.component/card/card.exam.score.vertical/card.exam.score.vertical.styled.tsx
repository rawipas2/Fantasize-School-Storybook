import styled from "styled-components";

export const CardExamScoreVerticalStyled = styled.div`
  display: grid;
  grid-row-gap: 24px;
  border: 1px solid #dededf;
  background: #ffffff;
  min-width: 200px;
  border-radius: 20px;
  justify-content: center;
  justify-items: center;
  padding: 20px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #e6f7fa;
  }
`

export const CardExamScoreVerticalTitleStyled = styled.div`
  color: black;
  font-size: 20px;
  word-wrap: break-word
`