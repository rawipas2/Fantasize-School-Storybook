import React, {ReactNode} from "react";
import * as font from "./font.styled.tsx"
import * as styled from "./container.styled.tsx"
interface IContainer {
    children: ReactNode
}
const Container: React.FC<IContainer> = (props: IContainer) => {
    return (
        <>
            <font.GlobalFont/>
            <styled.ContainerStyled>
                {props.children}
            </styled.ContainerStyled>
        </>
    )
}

export default Container