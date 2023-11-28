import React, { useState } from "react";
import * as styled from "./appbar.profile.styled"
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"

export interface IAppbarProfileMenu {
    icon: IconProp,
    label: string,
    onClick: () => void
}
interface IAppbarProfile {
    src: string,
    profileName: string,
    profileDescription: string,
    menus: IAppbarProfileMenu[],
    onClickLogout: () => void

}
const AppbarProfile: React.FC<IAppbarProfile> = (props: IAppbarProfile) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    return (
        <div>
            <styled.AppbarProfileStyled onClick={() => {setOpenMenu(!openMenu)}}>
                <div />
                <styled.AppbarProfileBodyStyled>
                    <styled.AppbarProfileImageStyled 
                        src={props.src}
                        alt="profile"
                    />
                    <styled.AppbarProfileUserCardStyled>
                        <styled.AppbarProfileUserNameStyled>
                            {props.profileName}
                        </styled.AppbarProfileUserNameStyled>
                        <styled.AppbarProfileDescriptionStyled>
                            {props.profileDescription}
                        </styled.AppbarProfileDescriptionStyled>
                    </styled.AppbarProfileUserCardStyled>
                </styled.AppbarProfileBodyStyled>
            </styled.AppbarProfileStyled> 
            {
                openMenu ? 
                    <styled.AppbarProfileMenuStyled>
                        <div />
                        {
                            props.menus.map((menu, index) => (
                                <styled.AppbarProfileMenuSlotStyled
                                    onClick={menu.onClick} 
                                    key={index}
                                >
                                    <div/>
                                    <FontAwesomeIcon icon={menu.icon} />
                                    <div>{menu.label}</div>
                                </styled.AppbarProfileMenuSlotStyled>
                            ))
                        }
                        <styled.AppbarDividerStyled />
                        <styled.AppbarProfileMenuSlotStyled onClick={props.onClickLogout}>
                            <div />
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            <div>Log Out</div>
                        </styled.AppbarProfileMenuSlotStyled>
                        <div/>
                    </styled.AppbarProfileMenuStyled>
                : <></>
            }
        </div>
    )
}

export default AppbarProfile