import { createAsyncThunk } from '@reduxjs/toolkit';
import { currentUser, deleteUser, editInfo, usersData } from '../../api/userApi';


export const fetchCurrentUser = createAsyncThunk('user/', async (_, { rejectWithValue }) => {
    try {
      const data = await currentUser();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});
export const fetchUsers = createAsyncThunk('user/users/', async (_, { rejectWithValue }) => {
    try {
      const data = await usersData();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const editInfoUser = createAsyncThunk('user/edit-user/userId', async (credentials, { rejectWithValue }) => {
    try {
      const data = await editInfo(credentials.userId,credentials.newDate);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});
export const deleteUserAction = createAsyncThunk('user/delete-user/userId', async (userId, { rejectWithValue }) => {
    try {
      const data = await deleteUser(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});