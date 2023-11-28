import React, {useEffect, useRef, useState} from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

import * as styled from "./textfield.selector.styled.tsx"
import Textfield, {ETextfieldLang as enumTextfieldLangr} from "../textfield/textfield.tsx";

export const ETextfieldLang = enumTextfieldLangr
export interface IFilterSelect {
    placeholder: string
    value: string
    selects: string[]
    disable: boolean
    lange: string
}

const TextfieldSelector: React.FC<IFilterSelect> = (props: IFilterSelect) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(props.value || "");

    const textfieldSelectorRef = useRef<HTMLDivElement | null>(null)
    const textfieldCardRef = useRef<HTMLDivElement | null>(null)
    const handleFocus = (e:boolean) => {
        setTimeout(
            () => setIsFocused(e), 100
        )
    }
    const handleValue = (e:string) => {
        setValue(e)
    }

    useEffect(() => {
        if (textfieldSelectorRef.current && textfieldCardRef.current) {
            const selectorWidth = textfieldSelectorRef.current.clientWidth;
            textfieldCardRef.current.style.width = `${selectorWidth}px`;
        }
        if (isFocused && textfieldCardRef.current) {
            textfieldCardRef.current.style.display = "block";
        } else if (textfieldCardRef.current) {
            textfieldCardRef.current.style.display = "none";
        }
    }, [isFocused])

    useEffect(() => {
        setValue(props.value || "")
    }, [props.value]);

    return (
        <>
            <styled.TextfieldSelectorStyled ref={textfieldSelectorRef}>
                <Textfield
                    icon={faAngleDown}
                    placeholder={props.placeholder}
                    value={value}
                    disable={props.disable}
                    onFocus={handleFocus}
                    lange={props.lange}
                />
                {isFocused && props.selects.length > 0 && (
                    <styled.TextfieldSelectorCardStyled ref={textfieldCardRef}>
                        {props.selects.map((menu, index) => (
                            <styled.TextfieldSelectorMenuStyled
                                key={index}
                                onClick={() => handleValue(menu)}
                            >
                                {menu}
                            </styled.TextfieldSelectorMenuStyled>
                        ))}
                    </styled.TextfieldSelectorCardStyled>
                )}
            </styled.TextfieldSelectorStyled>
        </>
    )
}


export default TextfieldSelector