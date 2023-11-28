import React, {ReactNode} from "react";
import * as styled from "./table.course.content.styled.tsx"
import Checkbox from "../../input/checkbox/checkbox.tsx";

export interface ITableCourse {
    onSelectAll : boolean,
    isCheckbox: boolean,
    onCheckedChange?: (isChecked: boolean) => void,
    children?: ReactNode,
    title1: string,
    title2: string
}
const TableCourseContent : React.FC<ITableCourse> = (props: ITableCourse) => {
    return (
        <styled.TableCourseContentStyled>
            <styled.TableCourseContentTitleStyled
                ischeckbox={`${props.isCheckbox}`.toLowerCase()}
            >
                <div/>
                {
                    props.isCheckbox ?
                        <styled.TableCourseContentTitleLabelStyled>
                            <Checkbox
                                onCheckedChange={props.onCheckedChange}
                                onChecked={props.onSelectAll}
                            />
                        </styled.TableCourseContentTitleLabelStyled>
                        : <></>
                }
                <styled.TableCourseContentTitleLabelStyled>
                    {props.title1}
                </styled.TableCourseContentTitleLabelStyled>
                {
                props.isCheckbox ?
                <></>
                : <div />
                }
                <styled.TableCourseContentTitleLabelStyled>
                    {props.title2}
                </styled.TableCourseContentTitleLabelStyled>
            </styled.TableCourseContentTitleStyled>
            <styled.TableCourseContentBodyStyled>
                {props.children}
            </styled.TableCourseContentBodyStyled>
        </styled.TableCourseContentStyled>
    )
}

export default TableCourseContent