import React from "react";
import * as styled from "./card.calendar.styled.tsx"
import {toRangeFormatter} from "@utils/date.utils.tsx"

export interface ICardCalendar {
    startTime: Date,
    endTime: Date,
    courseName: string,
    building: string
}
const CardCalendar: React.FC<ICardCalendar> = (props:ICardCalendar) => {
    return (
        <styled.CardCalendarStyled>
            <styled.CardCalendarTitleStyled>
                {toRangeFormatter(props.startTime, props.endTime)}
            </styled.CardCalendarTitleStyled>
            <styled.CardCalendarDividerStyled />
            <styled.CardCalendarBodyStyled>
                <styled.CardCalendarTitleStyled>
                    {props.courseName}
                </styled.CardCalendarTitleStyled>
                <styled.CardCalendarBuildingStyled>
                    {props.building}
                </styled.CardCalendarBuildingStyled>
            </styled.CardCalendarBodyStyled>
        </styled.CardCalendarStyled>
    )
}

export default CardCalendar