import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from 'redux/store/auth/authOperations';
import { selectUserData } from 'redux/store/selectors';
import { ButtonUser, UserContainer, UserMenuStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logoutUser());
  };
  return (
    <UserContainer>
      <UserMenuStyled>Hello, {userData.name}</UserMenuStyled>
      <ButtonUser onClick={handleLogOut}>Log Out</ButtonUser>
    </UserContainer>
  );
};

export default UserMenu;
