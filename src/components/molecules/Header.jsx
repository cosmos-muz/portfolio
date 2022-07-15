import { NavLink } from "../atoms/NavLink";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  padding-right:20px;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  width: 100%;
  right: 0px;
`;
const PortfoliaTitle = styled.div`
  font-size: 24px;
  margin: auto 0;
  margin: auto 0;
  font-weight: 900;
  color: #022640;
  padding-left:20px;
`;
export function Header(props) {
  return (
    <HeaderContainer>
      <PortfoliaTitle>Kai's Portfolio</PortfoliaTitle>
      <NavContainer>
        <NavLink>Kai's Portfolio</NavLink>
        <NavLink>Key Skills</NavLink>
        <NavLink>Contact</NavLink>
      </NavContainer>
    </HeaderContainer>
  );
}
