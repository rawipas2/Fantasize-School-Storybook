import React from "react";
import * as styled from "./navigation.group.styled.tsx"

export interface INavigationGroupMenu {
    title: string,
    to: string
}
export interface INavigationGroup {
 menus : INavigationGroupMenu[]
}
const NavigationGroup : React.FC<INavigationGroup> = (props: INavigationGroup) => {
    return (
        <styled.NavigationGroupStyled>
            {
                [...props.menus].map((menu, index) =>
                    <styled.NavLinkStyled
                        key={index}
                        to={menu.to}
                    >
                        {menu.title}
                    </styled.NavLinkStyled>
                )
            }
        </styled.NavigationGroupStyled>
    )
}

export default NavigationGroup