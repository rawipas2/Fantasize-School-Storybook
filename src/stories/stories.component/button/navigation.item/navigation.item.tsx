import React from "react";
import * as styled from "./navigation.item.styled.tsx"
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export interface INavigationItem {
    to: string
    icon: IconProp,
    children: React.ReactNode
}
const NavigationItem : React.FC<INavigationItem> = (props: INavigationItem) => {
    return (
        <styled.NavigationItemStyled to={props.to} >
            <FontAwesomeIcon icon={props.icon} />
            {props.children}
        </styled.NavigationItemStyled>
    )
}

export default NavigationItem