import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: #7B7B7C;
  margin-right: 20px;
  font-weight: normal;
`

interface ITextfieldHitStyled {
    isvalue?: string
}
export const TextfieldHitStyled = styled.div<ITextfieldHitStyled>`
  position: absolute;
  margin-left: 15px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 12px;
  color: ${(props) => props.isvalue 
          ? "#7B7B7C" 
          : "#05AACC"};;
  opacity: ${(props) => props.isvalue 
          ? 1 
          : 0};
  transform: ${(props) => props.isvalue 
          ? "translateY(-23px)" 
          : "translateY(0)"};
  transition: opacity 0.3s, transform 0.3s, z-index 0.3s;
  z-index: ${(props) => props.isvalue 
          ? 0 
          : -1};
`

export const TextfieldInputStyled = styled.input`
  border: none;
  background-color: transparent;
  height: 100%;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;

  &:focus {
    outline: none;
    border: none;

    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #7B7B7C;
    font-weight: 500;
    transition: opacity 0.3s;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`
export enum ETextfieldLang {
    TH = "TH",
    EN = "EN",
    ALL = "ALL"
}
interface ITextfieldStyled {
    isvalue?: string
    disable: string
    lange: string
}
export const TextfieldStyled = styled.div<ITextfieldStyled>`
  width: 100%;
  height: 45px;
  border: 1px solid ${(props) => props.isvalue 
          ? "#7B7B7C" 
          : "#f7f7f8"};
  border-radius: 10px;
  background-color: ${(props) => props.disable == "true" 
          ? "#D9D9D9" 
          : (props.isvalue 
                  ? "#FFFFFF" 
                  : "#f7f7f8")};
  display: flex;
  align-items: center;
  & ${TextfieldHitStyled} {
    background: linear-gradient(to top, ${(props) => props.disable == "true" 
            ? "#D9D9D9" 
            : props.isvalue 
                    ? "#FFFFFF" 
                    : "transparent"
    } 55%, transparent 45%);
  }
  
  &:hover {
    background-color: ${(props) => props.disable == "true" 
            ? "#D9D9D9" 
            : "#EFEFF0"};
    & ${TextfieldHitStyled} {
      background: linear-gradient(to top, ${(props) => props.disable == "true" 
              ? "#D9D9D9" 
              : "#EFEFF0"
        } 55%, transparent 45%);
    }
  }
  
  &:focus-within {
    border: 1px solid #05AACC;
    background-color: #FFFFFF;
    & ${TextfieldHitStyled} {
      opacity: 1;
      color: #05AACC;
      transform: translateY(-23px);
      background: linear-gradient(to top, #FFFFFF 55%, transparent 45%);
      z-index: 0;
    }
  }
  
  input {
    font-family: ${(props) => fontfamilyWithLange(props.lange)};
    &::placeholder {
      font-family: Poppins;
    }
  }
`

const fontfamilyWithLange = (_lange: string) : string => {
    const lang = ETextfieldLang[_lange as keyof typeof ETextfieldLang];
    switch (lang)
    {
        case "EN":
            return "Poppins"
        case "TH":
            return "Mitr"
        default: return "Poppins"
    }
}