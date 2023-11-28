import styled from "styled-components";

interface IButtonStyled {
    disable: string,
    buttonstyle: string
}
export enum EButtonStyled {
    Primary = "Primary",
    Alternative = "Alternative"
}
export const ButtonStyled = styled.div<IButtonStyled>`
  color: ${(props) => props.disable == "true" 
          ? colorDisableWithButtonStyle(props.buttonstyle)
          : colorWithButtonStyled(props.buttonstyle) };
  font-size: 16px;
  width: 100%; 
  height: 45px; 
  background: ${(props) => props.disable == "true" 
          ? backgroundDisableWithButtonStyled(props.buttonstyle) 
          : backgroundWithButtonStyle(props.buttonstyle)};
  border: ${(props) => props.disable == "true" 
          ? borderDisableWithButtonStyle(props.buttonstyle)
          : borderWithButtonStyle(props.buttonstyle)};
  border-radius: 20px;
  cursor: ${(props) => props.disable == "true" 
          ? "not-allowed" 
          : "pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  
  &:hover {
    color: ${(props) => props.disable == "true" 
            ? colorHoverDisableWithButtonStyle(props.buttonstyle)
            : colorHoverWithButtonStyled(props.buttonstyle)};
    background-color: ${(props) => props.disable == "true" 
            ? backgroundHoverDisableWithButtonStyle(props.buttonstyle) 
            : "#0590AD"};
  }
`

// Background
const backgroundHoverDisableWithButtonStyle = (style: string) : string => {
    const buttonstyle = EButtonStyled[style as keyof typeof EButtonStyled]
    switch (buttonstyle) {
        case EButtonStyled.Alternative:
            return "#FFFFFF"
        case EButtonStyled.Primary:
            return "#aedce5"
    }
}
const backgroundDisableWithButtonStyled = (style: string) : string => {
    const buttonstyle = EButtonStyled[style as keyof typeof EButtonStyled]
    switch (buttonstyle) {
        case EButtonStyled.Alternative:
            return "#FFFFFF"
        case EButtonStyled.Primary:
            return "#aedce5"
    }
}
const backgroundWithButtonStyle = (style: string) : string => {
    const buttonstyle = EButtonStyled[style as keyof typeof EButtonStyled]
    switch (buttonstyle) {
        case EButtonStyled.Alternative:
            return "#FFFFFF"
        case EButtonStyled.Primary:
            return "#05AACC"
    }
}

// Border
const borderWithButtonStyle = (style: string) : string => {
    const buttonstyle = EButtonStyled[style as keyof typeof EButtonStyled]
    switch (buttonstyle) {
        case EButtonStyled.Alternative:
            return "1px solid #05AACC"
        case EButtonStyled.Primary:
            return "1px solid transparent"
    }
}
const borderDisableWithButtonStyle = (style: string) : string => {
    const buttonstyle = EButtonStyled[style as keyof typeof EButtonStyled]
    switch (buttonstyle) {
        case EButtonStyled.Alternative:
            return "1px solid #B4E4F0"
        case EButtonStyled.Primary:
            return "1px solid transparent"
    }
}

// Color
const colorHoverDisableWithButtonStyle = (style: string) : string => {
    const buttonstyle = EButtonStyled[style as keyof typeof EButtonStyled]
    switch (buttonstyle) {
        case EButtonStyled.Alternative:
            return "#B4E4F0"
        case EButtonStyled.Primary:
            return "#FFFFFF"
    }
}
const colorHoverWithButtonStyled = (style: string) : string => {
    const buttonstyle = EButtonStyled[style as keyof typeof EButtonStyled]
    switch (buttonstyle) {
        case EButtonStyled.Alternative:
            return "#FFFFFF"
        case EButtonStyled.Primary:
            return "#FFFFFF"
    }
}
const colorDisableWithButtonStyle = (style: string) : string => {
    const buttonstyle = EButtonStyled[style as keyof typeof EButtonStyled]
    switch (buttonstyle) {
        case EButtonStyled.Alternative:
            return "#B4E4F0"
        case EButtonStyled.Primary:
            return "#FFFFFF"
    }
}
const colorWithButtonStyled = (style: string) : string => {
    const buttonstyle = EButtonStyled[style as keyof typeof EButtonStyled]
    switch (buttonstyle) {
        case EButtonStyled.Alternative:
            return "#05AACC"
        case EButtonStyled.Primary:
            return "#FFFFFF"
    }
}
