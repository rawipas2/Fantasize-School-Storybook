import React from "react";
import * as styled from "./table.course.content.cell.styled.tsx"
import Checkbox from "../../input/checkbox/checkbox.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFilePdf,
    faFileExcel,
    faFileWord,
    faFilePowerpoint,
    faClapperboard,
    faHeadphones,
    faImage
} from "@fortawesome/free-solid-svg-icons"
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {toDateFormatter} from "@utils/date.utils.tsx"

export interface ITableCourseContentCell {
    name: string,
    uploadDate: Date,
    type: ECourseContentData,
    selected: boolean,
    index: number,
    onCheckedChange: (index: number, isChecked: boolean) => void
}
export enum ECourseContentData {
    video= "video",
    music= "music",
    image= "image",
    pdf = "pdf",
    word= "word",
    excel= "excel",
    ppt = "ppt"
}
const TableCourseContentCell : React.FC<ITableCourseContentCell> = (props: ITableCourseContentCell) => {
    const handleOnCheckedChange = (isChecked: boolean) => {
        props.onCheckedChange(props.index, isChecked)
    }
    const getFaIconFormContentDataFile = (type: ECourseContentData) : IconProp  => {
        switch (type) {
            case ECourseContentData.excel:
                return faFileExcel
            case ECourseContentData.image:
                return faImage
            case ECourseContentData.music:
                return faHeadphones
            case ECourseContentData.pdf:
                return faFilePdf
            case ECourseContentData.word:
                return faFileWord
            case ECourseContentData.ppt:
                return faFilePowerpoint
            case ECourseContentData.video:
                return faClapperboard
        }
    }

    return (
        <styled.TableCourseContentCellStyled>
            <div />
            <styled.TableCourseCellTitleLabelStyled>
                <Checkbox
                    onChecked={props.selected}
                    onCheckedChange={handleOnCheckedChange}
                />
            </styled.TableCourseCellTitleLabelStyled>
            <styled.TableCourseCellTitleLabelStyled>
                <styled.TableCourseCellBodyNameStyled>
                    <FontAwesomeIcon icon={getFaIconFormContentDataFile(props.type)} />
                    <styled.TableCourseCellTitleLabelStyled>
                        {props.name}
                    </styled.TableCourseCellTitleLabelStyled>
                </styled.TableCourseCellBodyNameStyled>
            </styled.TableCourseCellTitleLabelStyled>
            <styled.TableCourseCellTitleLabelStyled>
                {toDateFormatter(props.uploadDate)}
            </styled.TableCourseCellTitleLabelStyled>
        </styled.TableCourseContentCellStyled>
    )
}

export default TableCourseContentCell