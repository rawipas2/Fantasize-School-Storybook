import React, { ReactNode, useEffect, useState } from "react";
import * as styled from "./template.today.class.styled"

export interface ITemplateTodayClass  {
    title: string,
    children?: ReactNode
}
const TemplateTodayClass: React.FC<ITemplateTodayClass> = (props: ITemplateTodayClass) => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <styled.TemplateTodayClassStyled>
            <styled.TemplateTodayClassTitleStyled>
                {props.title}
            </styled.TemplateTodayClassTitleStyled>
            <styled.TemplateTodayClassDateStyled>
                {currentDate.toLocaleString("en-EN", {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    timeZone: "UTC" }
                )}
            </styled.TemplateTodayClassDateStyled>
            <styled.TemplateTodayClassCalendarStyled>
                {props.children}
            </styled.TemplateTodayClassCalendarStyled>
        </styled.TemplateTodayClassStyled>
    )
}

export default TemplateTodayClass