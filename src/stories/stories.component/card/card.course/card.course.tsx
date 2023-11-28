import React from "react";
import * as styled from "./card.course.styled.tsx"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock,faSchool} from "@fortawesome/free-solid-svg-icons"
import {toRangeFormatter} from "@utils/date.utils.tsx"

export interface ICardCourse {
    courseId: number,
    courseName: string,
    startTime:  Date,
    endTime: Date,
    building: string,
    onClick?: (courseId: number) => void
}
const CardCourse: React.FC<ICardCourse> = (props: ICardCourse) => {

    const handleOnClick = () => {
        if (props.onClick)
            props.onClick(props.courseId)
    }
    return (
        <styled.CardCourseStyled onClick={handleOnClick}>
            <styled.CardCourseTitleStyled>
                {props.courseName}
            </styled.CardCourseTitleStyled>
            <styled.CardCourseRowStyled>
                <styled.CardCourseColumnIcon>
                    <FontAwesomeIcon icon={faClock} />
                </styled.CardCourseColumnIcon>
                <styled.CardCourseColumnLabel>
                    {toRangeFormatter(props.startTime ,props.endTime)}
                </styled.CardCourseColumnLabel>
            </styled.CardCourseRowStyled>
            <styled.CardCourseRowStyled>
                <styled.CardCourseColumnIcon>
                    <FontAwesomeIcon icon={faSchool} />
                </styled.CardCourseColumnIcon>
                <styled.CardCourseColumnLabel>
                    {props.building}
                </styled.CardCourseColumnLabel>
            </styled.CardCourseRowStyled>
        </styled.CardCourseStyled>
    )
}

export default CardCourse