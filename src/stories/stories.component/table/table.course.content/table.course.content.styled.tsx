import styled from "styled-components";

export const TableCourseContentStyled = styled.div`
`

interface ITableCourseContentTitleStyled {
    ischeckbox: string
}
export const TableCourseContentTitleStyled = styled.div<ITableCourseContentTitleStyled>`
  user-select: none;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({ ischeckbox }) => ischeckbox == "true" ?
                                                "0 20px 1fr 1fr" :
                                                "0 1fr 24px 1fr" };
  grid-column-gap: 24px;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 0.50px solid #BFBFBF;
`

export const TableCourseContentTitleLabelStyled = styled.div`
`

export const TableCourseContentBodyStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`