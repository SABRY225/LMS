import { createAsyncThunk } from '@reduxjs/toolkit';
import { addStudent } from '../../api/adminApi';
 
export const addStudentInCourse = createAsyncThunk('admin/add-student-in-course', async (credentials, { rejectWithValue }) => {
    try {
      const data = await addStudent(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});