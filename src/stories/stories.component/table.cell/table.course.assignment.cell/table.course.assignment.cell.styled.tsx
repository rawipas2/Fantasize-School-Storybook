import styled from "styled-components";

export const TableCourseAssignmentCellStyled = styled.div`
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

interface ITableCourseAssignmentCellTitleLabelStyled {
  status: string
}
export const TableCourseAssignmentCellTitleLabelStyled = styled.div<ITableCourseAssignmentCellTitleLabelStyled>`
  color: ${({ status }) => status == "overdue" ? "#EA907A" : "#000000" };
`

interface ITableCourseAssignmentCellSubmittedLabelStyled {
  status: string
}
export const TableCourseAssignmentCellSubmittedLabelStyled = styled.div<ITableCourseAssignmentCellSubmittedLabelStyled>`
  color: ${({ status }) => status == "overdue" || status == "late" ? "#EA907A" : "#4F8A8B"
                                    };
  font-weight: 500;
`

export const TableCourseAssignmentCellBodyStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`