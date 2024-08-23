import { createAsyncThunk } from '@reduxjs/toolkit';
import { editEvaluation } from '../../api/evaluationApi';
 
export const editEvaluationCourse = createAsyncThunk('evaluation/courseId/edit-evaluation', async (credentials, { rejectWithValue }) => {
    try {
      const data = await editEvaluation(credentials.courseId,credentials.newInfo);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});