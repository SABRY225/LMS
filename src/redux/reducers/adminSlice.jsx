import { createSlice } from '@reduxjs/toolkit';
import { addStudentInCourse } from '../actions/adminAction';


// Initial state
const initialState = {
  message:null,
  loading: false,
  error: null,
};

// Student slice
const adminSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addStudentInCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(addStudentInCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.error = null;

      })
      .addCase(addStudentInCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminSlice.reducer;
