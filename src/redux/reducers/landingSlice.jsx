import { createSlice } from '@reduxjs/toolkit';
import { fetchNumOfCourses, fetchNumOfStudents, fetchNumOfTeachers } from '../actions/landingAction';

// Initial state
const initialState = {
  numOfStudents: 0,
  numOfCourses: 0,
  numOfTeachers: 0,
  loading: false,
  error: null,
};

// Student slice
const landingSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNumOfCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNumOfCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfCourses = action.payload;
      })
      .addCase(fetchNumOfCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchNumOfStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNumOfStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfStudents = action.payload;
      })
      .addCase(fetchNumOfStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchNumOfTeachers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNumOfTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.numOfTeachers = action.payload;
      })
      .addCase(fetchNumOfTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default landingSlice.reducer;
