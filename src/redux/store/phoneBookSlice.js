import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, requestContacts } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const pending = (state, action) => {
  state.isLoading = true;
  state.error = '';
};

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(requestContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected);
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
