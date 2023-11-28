import React, {ReactNode} from "react";
import * as styled from "./storybook.wrapper.styled.tsx"
import * as font from "./container/font.styled.tsx"
interface IStorybookWrapper {
    children: ReactNode
}
const StorybookWrapper: React.FC<IStorybookWrapper> = (props: IStorybookWrapper) => {
    return (
        <styled.StorybookWrapperStyled>
            <font.GlobalFont />
            {props.children}
        </styled.StorybookWrapperStyled>
    )
}

export default StorybookWrapper