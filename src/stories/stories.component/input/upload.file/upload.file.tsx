import React from "react";
import * as styled from "./upload.file.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudArrowUp} from "@fortawesome/free-solid-svg-icons"

const UploadFile: React.FC = () => {
    return (
        <styled.UploadFileStyled>
            <styled.UploadFileBodyStyled>
                <FontAwesomeIcon icon={faCloudArrowUp} />
                <styled.UploadFileLabalStyled>Drag & drop to upload</styled.UploadFileLabalStyled>
                <styled.UploadFileLabalInputBodyStyled>
                    <styled.UploadFileLabalStyled>or</styled.UploadFileLabalStyled>
                    <styled.UploadFileLabalInputSyled>browse</styled.UploadFileLabalInputSyled>
                </styled.UploadFileLabalInputBodyStyled>
            </styled.UploadFileBodyStyled>
        </styled.UploadFileStyled>
    )
}

export default UploadFile