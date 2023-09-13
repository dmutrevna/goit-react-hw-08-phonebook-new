import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from './authOperations';

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  authenticated: false,
  // isRegistration:false,
  error: null,
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      ////////Register/////////
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = payload.user;
        state.token = payload.token;
      })
      ////////login/////////
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = payload.user;
        state.token = payload.token;
      })
      ////////log out/////////
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = false;
        state.userData = null;
        state.token = null;
      })
      ////////Refresh/////////
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = payload;
      })
      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected),
});
export const authReducer = authSlice.reducer;
