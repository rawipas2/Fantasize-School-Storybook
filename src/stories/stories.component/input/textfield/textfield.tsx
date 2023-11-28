import React, {useEffect, useState} from "react";
import * as styled from "./textfield.styled.tsx";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
export const ETextfieldLang = styled.ETextfieldLang
export interface ITextfield {
    icon?: IconProp
    placeholder: string
    value: string
    lange: string
    disable: boolean
    onFocus?: (e:boolean) => void
}
const Textfield: React.FC<ITextfield> = (props: ITextfield) => {
    const [value, setValue] = useState(props.value || "");
    const handleFocus = () => {
        if (props.onFocus != null)
            props.onFocus(true)
    }
    const handleBlur = () => {
        if (props.onFocus != null)
            props.onFocus(false)
    }

    const validateValue = (input: string) => {
        const thaiPattern = /^[ก-๏\s]+/;
        const englishPattern = /^[A-Za-z\s!@#$%^&*().]+/;
        if (input.length > 0) {
            const lang = ETextfieldLang[props.lange as keyof typeof ETextfieldLang];
            switch (lang) {
                case "EN":
                    if (!englishPattern.test(input)) return "";
                    break;
                case "TH":
                    if (!thaiPattern.test(input)) return "";
                    break;
                default:
                    break;
            }
        }
        return input;
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = validateValue(e.target.value);
        setValue(inputValue)
    }

    useEffect(() => {
        setValue(validateValue(props.value || ""))
    }, [props.value])

    return (
        <styled.TextfieldStyled
            isvalue={value}
            disable={`${props.disable}`.toLowerCase()}
            lange={props.lange}
        >
            <styled.TextfieldHitStyled isvalue={value}>
                {props.placeholder}
            </styled.TextfieldHitStyled>
            <styled.TextfieldInputStyled
                placeholder={props.placeholder}
                value={value}
                disabled={props.disable}
                onChange={handleOnChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {props.icon && <styled.FontAwesomeIconStyled icon={props.icon} />}
        </styled.TextfieldStyled>
    )
}

export default Textfield
