import { createAsyncThunk } from '@reduxjs/toolkit';
import { numberOfCourses, numberOfStudents, numberOfTeachers } from '../../api/landingApi';

export const fetchNumOfCourses = createAsyncThunk('landing/num-of-courses/', async (_, { rejectWithValue }) => {
    try {
      const data = await numberOfCourses();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const fetchNumOfStudents = createAsyncThunk('landing/num-of-students/', async (_, { rejectWithValue }) => {
    try {
      const data = await numberOfStudents();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const fetchNumOfTeachers = createAsyncThunk('landing/num-of-teachers/', async (_, { rejectWithValue }) => {
    try {
      const data = await numberOfTeachers();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});