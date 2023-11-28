import React from "react";
import * as styled from "./card.assignment.styled.tsx"
import {toDateFormatter} from"@utils/date.utils.tsx"
export interface ICardAssignment {
    assignmentName: string,
    courseName: string,
    dueDate: Date,
    point: number
}
const CardAssignment : React.FC<ICardAssignment> = (props: ICardAssignment) => {
    return (
        <styled.CardAssignmentStyled>
            <styled.CardAssignmentTitleStyled>
                <styled.CardAssignmentLabelStyled>{props.assignmentName}</styled.CardAssignmentLabelStyled>
                <styled.CardAssignmentLabelStyled>{props.point} points</styled.CardAssignmentLabelStyled>
            </styled.CardAssignmentTitleStyled>
            <styled.CardAssignmentCourseNameStyled>
                <styled.CardAssignmentLabelStyled>{props.courseName}</styled.CardAssignmentLabelStyled>
                <styled.CardAssignmentLabelStyled>Due {toDateFormatter(props.dueDate)}</styled.CardAssignmentLabelStyled>
            </styled.CardAssignmentCourseNameStyled>
        </styled.CardAssignmentStyled>
    )
}

export default CardAssignment