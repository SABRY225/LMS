import { createSlice } from '@reduxjs/toolkit';
import { addCourseAction, deleteCourseAction, editCourseAction, getCourseById, getCourses, getCoursesByStudent, getCoursesByTeacher } from '../actions/courseAction';


// Initial state
const initialState = {
  courses: [],
  course: null,
  coursesByTeacher: [],
  coursesByStudent: [],
  loading: false,
  error: null,
};

// Course slice
const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add course
      .addCase(addCourseAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCourseAction.fulfilled, (state, action) => {
        state.loading = false;
        state.courses.push(action.payload);
      })
      .addCase(addCourseAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      // Edit course
      .addCase(editCourseAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(editCourseAction.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.courses.findIndex((course) => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(editCourseAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Delete course
      .addCase(deleteCourseAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCourseAction.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.filter((course) => course.id !== action.payload);
      })
      .addCase(deleteCourseAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get courses
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get course by ID
      .addCase(getCourseById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload;
      })
      .addCase(getCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get courses by teacher
      .addCase(getCoursesByTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCoursesByTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.coursesByTeacher = action.payload;
      })
      .addCase(getCoursesByTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCoursesByStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCoursesByStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.coursesByStudent = action.payload;
      })
      .addCase(getCoursesByStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default courseSlice.reducer;
