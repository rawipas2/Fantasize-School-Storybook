import React, {useEffect, useState} from "react";
import * as styled from "./checkbox.styled.tsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export interface ICheckbox {
    onChecked: boolean
    onCheckedChange?: (checked: boolean) => void
}
const Checkbox: React.FC<ICheckbox> = (props: ICheckbox) => {
    const [checked, setChecked] = useState(props.onChecked || false)

    const handleOnClick = () : void => {
        if (props.onCheckedChange)
            props.onCheckedChange(!checked)
        setChecked(!checked)
    }

    useEffect(() => {
        setChecked(props.onChecked || false)
    }, [props.onChecked])

    return (
        <styled.CheckboxStyled
            ischecked={`${checked}`.toLowerCase()}
            onClick={handleOnClick}
        >
            {checked && (
                <FontAwesomeIcon  icon={faCheck} />
            )}
        </styled.CheckboxStyled>
    )
}

export default Checkbox