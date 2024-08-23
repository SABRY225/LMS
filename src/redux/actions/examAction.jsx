import { createAsyncThunk } from '@reduxjs/toolkit';
import { addResult, craeteExam, deleteExam, editExam, editResult, examData, examInfo } from '../../api/examApi';

export const addExamAction = createAsyncThunk('exam/add-exam/courseId/add-exam', async (credentials, { rejectWithValue }) => {
    try {
      const data = await craeteExam(credentials.courseId,credentials.newDate);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const editExamAction = createAsyncThunk(`exam/edit-exam/examId`, async (credentials, { rejectWithValue }) => {
    try {
      const data = await editExam(credentials.courseId,credentials.newData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const deleteExamAction = createAsyncThunk(`exam/delete-exam/examId`, async (examId, { rejectWithValue }) => {
    try {
      const data = await deleteExam(examId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const getExamById = createAsyncThunk(`exam/examId`, async (examId, { rejectWithValue }) => {
    try {
      const data = await examInfo(examId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const getExamsInCourse = createAsyncThunk(`exam/exams/all`, async (_, { rejectWithValue }) => {
    try {
      const data = await examData();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const editExamResult = createAsyncThunk(`exam/edit-result/resultId`, async (resultId, { rejectWithValue }) => {
    try {
      const data = await editResult(resultId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const addExamResult = createAsyncThunk(`exam/add-result/examId`, async (examId, { rejectWithValue }) => {
  try {
    const data = await addResult(examId);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});