import { createSlice } from '@reduxjs/toolkit';
import {
  addLectureAction,
  deleteLectureAction,
  editLectureAction,
  fetchLecturesByTeacher,
  getLectureById,
  getLecturesInCourse
} from '../actions/lectureAction';

const initialState = {
  lectures: [],
  lecturesByTeacher: [],
  lectureDetails: null,
  loading: false,
  error: null,
};

const lectureSlice = createSlice({
  name: 'lecture',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add lecture
      .addCase(addLectureAction.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(addLectureAction.fulfilled, (state, action) => {
        state.loading = false;
        state.lectures.push(action.payload);
      })
      .addCase(addLectureAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Use a specific error message
      })
      
      // Edit lecture
      .addCase(editLectureAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editLectureAction.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.lectures.findIndex((lecture) => lecture._id === action.payload._id);
        if (index !== -1) {
          state.lectures[index] = action.payload;
        }
      })
      .addCase(editLectureAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      // Delete lecture
      .addCase(deleteLectureAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteLectureAction.fulfilled, (state, action) => {
        state.loading = false;
        state.lectures = state.lectures.filter((lecture) => lecture._id !== action.payload);
      })
      .addCase(deleteLectureAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      // Get lectures in course
      .addCase(getLecturesInCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLecturesInCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.lectures = action.payload;
      })
      .addCase(getLecturesInCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      // Get lecture by ID
      .addCase(getLectureById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLectureById.fulfilled, (state, action) => {
        state.loading = false;
        state.lectureDetails = action.payload;
      })
      .addCase(getLectureById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      // Get lectures by teacher
      .addCase(fetchLecturesByTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLecturesByTeacher.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action);
        state.lecturesByTeacher = action.payload;
      })
      .addCase(fetchLecturesByTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default lectureSlice.reducer;
