import styled from "styled-components";

export const UploadFileStyled = styled.div`
    height: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    font-size: 16px;
    border: 2px #BFBFBF dashed;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
        background-color: #E6F7FA;
    }
`

export const UploadFileBodyStyled = styled.div`
    place-self: center;
    display: grid;
    justify-items: center;
    user-select: none;
`

export const UploadFileLabalStyled = styled.div`
`

export const UploadFileLabalInputSyled = styled.div`
    color: #05AACC;
`

export const UploadFileLabalInputBodyStyled = styled.div`
    display: flex;
    gap: 5px;
`