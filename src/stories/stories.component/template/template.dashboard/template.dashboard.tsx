import React, { ReactNode } from "react";
import * as styled from "./template.dashboard.styled"

interface ITemplateDashboard {
    contents: ITemplateDashboardContent[]
}
export interface ITemplateDashboardContent {
    contentTitle?: string,
    children?: ReactNode
}
const TemplateDashboard: React.FC<ITemplateDashboard> = (props: ITemplateDashboard) => {
    return (
        <styled.TemplateDashboardStyled>
            {
                props.contents.map((content, index) => (
                    <styled.TemplateDashboardContentStyled 
                            key={index}
                        >
                            
                        <styled.TemplateDashboardContentTitleStyled>
                            {content.contentTitle ?? "undefined"}
                        </styled.TemplateDashboardContentTitleStyled>
                        {content.children ?? <></>}
                    </styled.TemplateDashboardContentStyled>
                ))
            }
        </styled.TemplateDashboardStyled>
    )
}

export default TemplateDashboard