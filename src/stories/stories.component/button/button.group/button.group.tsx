import React, {useEffect, useState} from "react";
import * as styled from "./button.group.styled.tsx"
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface IButtonGroup {
    bodys: IButtonGroupBody[]
    group: IButtonGroupBody
    onGroupChange: (newGroup: IButtonGroupBody) => void
}
export interface IButtonGroupBody {
    icon: IconProp,
    label: string
}
const ButtonGroup: React.FC<IButtonGroup> = (props: IButtonGroup) => {
    const [currentGroup, setCurrentGroup] = useState(props.group || props.bodys[0] || {})

    const handleOnClick = (gbutton: IButtonGroupBody) => {
        setCurrentGroup(gbutton)
        if (props.onGroupChange)
            props.onGroupChange(gbutton)
    }
    useEffect(() => {
        setCurrentGroup(props.group || props.bodys[0] || {})
    }, [props.bodys, props.group])
    return (
        <>
            {props.bodys.length > 0 && (
                <styled.ButtonGroupStyled>
                    {props.bodys.map((gbutton, index) => (
                        <styled.ButtonGroupBodyStyled
                            key={index}
                            onClick={() => handleOnClick(gbutton)}
                            isactive={currentGroup.label == gbutton.label ? "true" : "false"}
                        >
                            <styled.ButtonGroupIconStyled>
                                <FontAwesomeIcon icon={gbutton.icon} />
                            </styled.ButtonGroupIconStyled>
                            <styled.ButtonGroupTextStyled>
                                {gbutton.label}
                            </styled.ButtonGroupTextStyled>
                        </styled.ButtonGroupBodyStyled>
                    ))}
                </styled.ButtonGroupStyled>
            )}
        </>
    )
}

export default ButtonGroup