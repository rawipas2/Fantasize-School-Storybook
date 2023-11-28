import React, { useEffect, useState } from "react";
import * as styled from "./table.course.assignment.cell.styled.tsx"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboardList} from "@fortawesome/free-solid-svg-icons"
import {toDateFormatter} from "@utils/date.utils.tsx"
export interface ITableCourseAssignmentCell {
    name: string,
    dueDate: Date,
    assignmentId: number,
    onClick: (index: number) => void,
    submitted: boolean,
    submitDate: Date | null
}
// status -> 
// 1. progress 
// 2. submitted 
// 3. overdue
// 4. late
const TableCourseAssignmentCell: React.FC<ITableCourseAssignmentCell> = (props:ITableCourseAssignmentCell) => {
    
    const [status, setStatus] = useState<string>("progress")
    const handleOnClick = () => {
        props.onClick(props.assignmentId)
    }

    const handleOverdueValue = () => {
        // setOverdue(`${(props.dueDate < new Date())}`.toLocaleLowerCase())
        const currentDate = new Date()
        let responseStatus = ""
        if (props.submitted)
            responseStatus = props.submitDate! <= props.dueDate ? "submitted" : "late"
        else if (props.dueDate > currentDate)
            responseStatus = "progress"
        else if (props.dueDate <= currentDate)
            responseStatus = "overdue"
        setStatus(responseStatus)
    }

    const init = async () => {
        handleOverdueValue()
    }

    useEffect(() => {
        init()
    }, [status])
    return (
        <styled.TableCourseAssignmentCellStyled
            onClick={handleOnClick}
        >
            <div />
            <styled.TableCourseAssignmentCellTitleLabelStyled
                status={status}
            >
                <FontAwesomeIcon icon={faClipboardList} />
            </styled.TableCourseAssignmentCellTitleLabelStyled>
            <styled.TableCourseAssignmentCellTitleLabelStyled
                status={status}
            >
                {props.name}
            </styled.TableCourseAssignmentCellTitleLabelStyled>
            <styled.TableCourseAssignmentCellTitleLabelStyled
                status={status}
            >
                <styled.TableCourseAssignmentCellBodyStyled>
                    <styled.TableCourseAssignmentCellTitleLabelStyled
                        status={status}
                    >
                        {toDateFormatter(props.dueDate)}
                    </styled.TableCourseAssignmentCellTitleLabelStyled>
                    <styled.TableCourseAssignmentCellSubmittedLabelStyled
                        status={status}
                    >
                        {
                            props.submitted ? "Submitted" : 
                                status == "overdue" ? "Overdue" : ""
                        }
                    </styled.TableCourseAssignmentCellSubmittedLabelStyled>
                </styled.TableCourseAssignmentCellBodyStyled>
            </styled.TableCourseAssignmentCellTitleLabelStyled>
        </styled.TableCourseAssignmentCellStyled>
    )
}

export default TableCourseAssignmentCell