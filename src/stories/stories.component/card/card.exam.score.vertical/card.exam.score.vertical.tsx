import React from "react";
import * as styled from "./card.exam.score.vertical.styled.tsx"
import ProgressRing from "../../progress/progress.ring/progress.ring.tsx";

export interface ICardExamScoreVertical {
    percent: number,
    courseName: string,
    onClick?: () => void
}
const CardExamScoreVertical: React.FC<ICardExamScoreVertical> = (props:ICardExamScoreVertical) => {
    const handleClicked = () => {
        if (props.onClick)
            props.onClick()
    }
    return (
        <styled.CardExamScoreVerticalStyled
            onClick={handleClicked}
        >
            <ProgressRing
                percent={props.percent}
                background={"#ffffff"}
            />
            <styled.CardExamScoreVerticalTitleStyled>
                {props.courseName}
            </styled.CardExamScoreVerticalTitleStyled>
        </styled.CardExamScoreVerticalStyled>
    )
}

export default CardExamScoreVertical