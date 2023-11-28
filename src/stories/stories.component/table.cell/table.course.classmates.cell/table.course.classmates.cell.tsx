import React from "react";
import * as styled from "./table.course.classmates.cell.styled.tsx"

export interface ITableCourseClassmates {
    index: number,
    userId: number,
    userName: string,
    onClick: (userId: number) => void
}
const TableCourseClassmatesCell : React.FC<ITableCourseClassmates> = (props:ITableCourseClassmates) => {
    return (
        <styled.TableCourseClassmatesCellStyled onClick={() => {props.onClick(props.index)}}>
            <div />
            <styled.TableCourseClassmatesCellTitleLabelStyled>
                {props.index}
            </styled.TableCourseClassmatesCellTitleLabelStyled>
            <styled.TableCourseClassmatesCellTitleLabelStyled>
                {props.userName}
            </styled.TableCourseClassmatesCellTitleLabelStyled>
        </styled.TableCourseClassmatesCellStyled>
    )
}

export default TableCourseClassmatesCell