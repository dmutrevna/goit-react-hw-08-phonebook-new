import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from 'redux/store/auth/authOperations';
import { selectUserData } from 'redux/store/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <span>Hello, {userData.name}</span>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default UserMenu;
