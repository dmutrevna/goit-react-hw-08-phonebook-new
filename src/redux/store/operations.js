import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './auth/authOperations';

export const requestContacts = createAsyncThunk(
  'contacts/requestContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('contacts');

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (formData, thunkAPI) => {
    try {
      const { data } = await instance.post('contacts', formData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`contacts/${id}`);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
