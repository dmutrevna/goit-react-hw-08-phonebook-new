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

function Navigation() {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthentication);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <header>
      <nav id="sidebar">
        <NavLink to={HOME_ROUTE}>Home</NavLink>
        {authenticated ? (
          <>
            <NavLink to={CONTACTS_ROUTE}>Contacts</NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to={LOGIN_ROUTE}>Login</NavLink>
            <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navigation;
