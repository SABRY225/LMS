import { createSlice } from '@reduxjs/toolkit';
import { addExamAction, addExamResult, deleteExamAction, editExamAction, editExamResult, fetchExamsByTeacher, getExamById, getExamsInCourse } from '../actions/examAction';

// Initial state
const initialState = {
  exams: [],
  examsByTeaher: [],
  examDetails: null,
  examResult: null,
  loading: false,
  error: null,
};

// Exam slice
const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add exam
      .addCase(addExamAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addExamAction.fulfilled, (state, action) => {
        state.loading = false;
        state.exams.push(action.payload);

      })
      .addCase(addExamAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Edit exam
      .addCase(editExamAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(editExamAction.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.exams.findIndex((exam) => exam.id === action.payload.id);
        if (index !== -1) {
          state.exams[index] = action.payload;
        }
      })
      .addCase(editExamAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete exam
      .addCase(deleteExamAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteExamAction.fulfilled, (state, action) => {
        state.loading = false;
        state.exams = state.exams.filter((exam) => exam.id !== action.payload);
      })
      .addCase(deleteExamAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get exams in course
      .addCase(getExamsInCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExamsInCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.exams = action.payload;
      })
      .addCase(getExamsInCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get exams in course
      .addCase(fetchExamsByTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExamsByTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.examsByTeaher = action.payload;
      })
      .addCase(fetchExamsByTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get exam by ID
      .addCase(getExamById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExamById.fulfilled, (state, action) => {
        state.loading = false;
        state.examDetails = action.payload;
      })
      .addCase(getExamById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get exam result
      .addCase(addExamResult.pending, (state) => {
        state.loading = true;
      })
      .addCase(addExamResult.fulfilled, (state, action) => {
        state.loading = false;
        state.examResult = action.payload.value;
      })
      .addCase(addExamResult.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Set exam result
      .addCase(editExamResult.pending, (state) => {
        state.loading = true;
      })
      .addCase(editExamResult.fulfilled, (state, action) => {
        state.loading = false;
        state.examResult = action.payload.value;

      })
      .addCase(editExamResult.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default examSlice.reducer;
