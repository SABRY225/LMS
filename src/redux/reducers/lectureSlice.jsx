import { createSlice } from '@reduxjs/toolkit';
import { addLectureAction, deleteLectureAction, editLectureAction ,getLectureById, getLecturesInCourse} from '../actions/lectureAction';

// Initial state
const initialState = {
  lectures: [],
  lectureDetails: null,
  loading: false,
  error: null,
};

// Lecture slice
const lectureSlice = createSlice({
  name: 'lectures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add lecture
      .addCase(addLectureAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addLectureAction.fulfilled, (state, action) => {
        state.loading = false;
        state.lectures.push(action.payload);
      })
      .addCase(addLectureAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Edit lecture
      .addCase(editLectureAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(editLectureAction.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.lectures.findIndex((lecture) => lecture.id === action.payload.id);
        if (index !== -1) {
          state.lectures[index] = action.payload;
        }
      })
      .addCase(editLectureAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete lecture
      .addCase(deleteLectureAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteLectureAction.fulfilled, (state, action) => {
        state.loading = false;
        state.lectures = state.lectures.filter((lecture) => lecture.id !== action.payload);
      })
      .addCase(deleteLectureAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get lectures in course
      .addCase(getLecturesInCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLecturesInCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.lectures = action.payload;
      })
      .addCase(getLecturesInCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get lecture by ID
      .addCase(getLectureById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLectureById.fulfilled, (state, action) => {
        state.loading = false;
        state.lectureDetails = action.payload;
      })
      .addCase(getLectureById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default lectureSlice.reducer;
