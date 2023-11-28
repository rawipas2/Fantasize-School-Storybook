import styled from "styled-components";
import {NavLink} from "react-router-dom"

export const NavigationGroupStyled = styled.div`
  display: flex;
  grid-column-gap: 24px;
`

export const NavLinkStyled = styled(NavLink)`
  color: #BFBFBF;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
  
  &.active {
    color: #50C4DB;
    font-weight: 600;
    border-bottom: 3px solid #50C4DB;
    
  }
`