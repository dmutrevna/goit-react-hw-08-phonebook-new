import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
  font-weight: bold;
`;

export const NavigationContainer = styled.header`
  background-color: rgb(149, 168, 246);
  color: #fff;
  padding: 10px;
`;

export const NavSidebar = styled.nav`
  display: flex;
  justify-content: flex-start;

  align-items: baseline;
  flex-wrap: wrap;
  flex-direction: row-reverse;

  a {
    text-decoration: none;
    color: black;
    margin-right: 20px;
    font-weight: bold;
  }
`;
