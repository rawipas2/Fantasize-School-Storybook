import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationItemStyled = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  max-width: 278px;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  border-radius: 20px;
  padding-left: 30px;
  gap: 20px;
  
  &.active {
    color: #F7F7F8;
    background: #50C4DB;
    font-weight: 700;
    &:hover {
      color: #F7F7F8;
      background: #50C4DB;
      font-weight: 700;
    }
  }
  
  &:hover {
    background-color: #E6F7FA;
  }
`