import React, {ReactNode} from "react";
import * as styled from "./button.styled.tsx";
export const EButtonStyled = styled.EButtonStyled
export interface IButton {
    children: ReactNode,
    onClick?:() => void,
    disable: boolean,
    buttonstyle: string
}

const Button : React.FC<IButton> = (props: IButton) => {
    const handleOnClick = () => {
        if (!props.disable && props.onClick)
            props.onClick()
    }
    return (
        <styled.ButtonStyled
            disable={`${props.disable}`}
            onClick={handleOnClick}
            buttonstyle={props.buttonstyle}
        >
            {props.children}
        </styled.ButtonStyled>
    )
}

export default  Button