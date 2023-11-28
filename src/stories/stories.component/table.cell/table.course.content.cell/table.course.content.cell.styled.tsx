import styled from "styled-components";

export const TableCourseContentCellStyled = styled.div`
  display: grid;
  grid-template-rows: 48px;
  grid-template-columns: 0 20px 1fr 1fr;
  grid-column-gap: 24px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #E6F7FA;
  }
`

export const TableCourseCellTitleLabelStyled = styled.div`
`

export const TableCourseCellBodyNameStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 15px 1fr;
  grid-column-gap: 24px;
  align-content: center;
  align-items: center;
`