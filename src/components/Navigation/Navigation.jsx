import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from 'constants/routes';
import { refreshUser } from 'redux/store/auth/authOperations';
import { selectUserAuthentication } from 'redux/store/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import {
  NavSidebar,
  NavigationContainer,
  StyledNavLink,
} from './Navigation.styled';

function Navigation() {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthentication);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <NavSidebar id="sidebar">
        <StyledNavLink to={HOME_ROUTE}>Home</StyledNavLink>
        {authenticated ? (
          <>
            <StyledNavLink to={CONTACTS_ROUTE}>Contacts</StyledNavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <StyledNavLink to={LOGIN_ROUTE}>Login</StyledNavLink>
            <StyledNavLink to={REGISTRATION_ROUTE}>Registration</StyledNavLink>
          </>
        )}
      </NavSidebar>
    </NavigationContainer>
  );
}

export default Navigation;
