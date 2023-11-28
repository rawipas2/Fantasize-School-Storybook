import React from "react";
import * as styled from "./card.exam.score.styled.tsx"
import ProgressRing from "../../progress/progress.ring/progress.ring.tsx";

export interface ICardExamScore {
    courseName: string,
    details: string,
    percent: number
}
const CardExamScore : React.FC<ICardExamScore> = (props: ICardExamScore) => {
    return (
        <styled.CardExamScoreStyled>
                <styled.CardExamScoreColumnStyled>
                    <styled.CardExamScoreRowStyled>
                        <styled.CardExamScoreTitleColumnStyled>
                            {props.courseName}
                        </styled.CardExamScoreTitleColumnStyled>
                        <styled.CardExamScoreLabelStyled>
                            {props.details}
                        </styled.CardExamScoreLabelStyled>
                    </styled.CardExamScoreRowStyled>
                </styled.CardExamScoreColumnStyled>
                <styled.CardExamScoreProgressRingColumnStyled>
                    <ProgressRing
                        percent={props.percent}
                        background={"#ffffff"}
                    />
                </styled.CardExamScoreProgressRingColumnStyled>
        </styled.CardExamScoreStyled>
    )
}

export default CardExamScore