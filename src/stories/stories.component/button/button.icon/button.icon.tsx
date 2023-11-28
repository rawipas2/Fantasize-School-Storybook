import React from "react";
import * as styled from "./button.icon.styled.tsx"
import {IconProp} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export interface IButtonIcon {
    icon: IconProp,
    onClick?:() => void,
    backgroundColor: string
}
const ButtonIcon : React.FC<IButtonIcon> = (props:IButtonIcon) => {

    const handleOnClick = () : void => {
        if (props.onClick)
            props.onClick()
    }

    return (
        <styled.ButtonIconStyled
            onClick={handleOnClick}
            backgroundcolor={props.backgroundColor}
        >
            <FontAwesomeIcon icon={props.icon} />
        </styled.ButtonIconStyled>
    )
}

export default ButtonIcon