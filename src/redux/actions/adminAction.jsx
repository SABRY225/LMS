import { createAsyncThunk } from '@reduxjs/toolkit';
import { addStudent } from '../../api/adminApi';
 
export const addStudentInCourse = createAsyncThunk('admin/add-student-in-course', async (credentials, { rejectWithValue }) => {
    try {
      const data = await addStudent(credentials.formData,credentials.token);
      console.log(data);
      if (data.message != 'Student added to course successfully') {
      return rejectWithValue(data);
      }else
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});