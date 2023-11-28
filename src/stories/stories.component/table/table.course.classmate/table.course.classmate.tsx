import React, { ReactNode } from "react";
import * as styled from "./table.course.classmate.styled"


export interface ITableCourseClassMate {
    children?: ReactNode
}
const TableCourseClassMate: React.FC<ITableCourseClassMate> = (props: ITableCourseClassMate) => {
    return (
        <styled.TableCourseClassMateStyled>
            <styled.TableCourseClassMateTitleStyled>
                <div />
                <styled.TableCourseClassMateTitleLabelStyled>
                    No.
                </styled.TableCourseClassMateTitleLabelStyled>
                <styled.TableCourseClassMateTitleLabelStyled>
                    Name
                </styled.TableCourseClassMateTitleLabelStyled>
            </styled.TableCourseClassMateTitleStyled>
            <styled.TableCourseClassMateBodyStyled>
                {props.children}
            </styled.TableCourseClassMateBodyStyled>
        </styled.TableCourseClassMateStyled>
    )
}

export default TableCourseClassMate