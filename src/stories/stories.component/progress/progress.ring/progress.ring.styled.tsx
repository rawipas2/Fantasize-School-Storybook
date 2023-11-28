import styled from "styled-components";

interface IRingStyled {
    percent: string,
    background: string
}
export const ProgressRingStyled = styled.div<IRingStyled>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
  color: #000000;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background: ${(props) => getColorWithPercent(props.percent, props.background)};
}
  
  
`

const getColorWithPercent = (percent: string, background: string) : string => {
    const nPercent = parseFloat(percent)
    if (nPercent <= 20) {
        return `radial-gradient(closest-side, ${background} 79%, transparent 80% 100%),conic-gradient(#EA907A ${percent}%, #dededf 0)`
    }
    else if (nPercent <= 60) {
        return `radial-gradient(closest-side, ${background} 79%, transparent 80% 100%),conic-gradient(#FFCB74 ${percent}%, #dededf 0)`
    }
    else  {
        return `radial-gradient(closest-side, ${background} 79%, transparent 80% 100%),conic-gradient(#4F8A8B ${percent}%, #dededf 0)`
    }
}
