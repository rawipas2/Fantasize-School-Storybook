import React from "react";
import * as styled from "./progress.ring.styled.tsx"
export interface IProgressRing {
    percent: number,
    background: string
}
const ProgressRing : React.FC<IProgressRing> = (props: IProgressRing) => {
    return (
        <styled.ProgressRingStyled
            percent={props.percent.toString()}
            background={props.background}
        >
            {props.percent}%
        </styled.ProgressRingStyled>
    )
}

export default ProgressRing