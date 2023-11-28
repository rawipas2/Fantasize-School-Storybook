import styled from "styled-components";

export const CardCourseStyled = styled.div`
  display: grid;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #dededf;
  border-radius: 20px;
  cursor: pointer;
  padding-bottom: 14px;

  &:hover {
    background-color: #e6f7fa;
  }
`

export const CardCourseTitleStyled = styled.div`
  color: black;
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 24px;
  margin-left: 24px;
  margin-top: 14px;
`

export const CardCourseRowStyled = styled.div`
  margin-right: 24px;
  margin-left: 24px;
  display: flex;
  gap: 20px;
`

export const CardCourseColumnIcon = styled.div`
  width: 20px;
  color: #7B7B7C;
`

export const CardCourseColumnLabel = styled.div`
  color: #7B7B7C;
`
