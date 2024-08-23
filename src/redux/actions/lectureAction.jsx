import { createAsyncThunk } from '@reduxjs/toolkit';
import { craeteLecture, deleteLecture, editLecture, lectureInfo, lecturesData } from '../../api/lecture.Api';

export const addLectureAction = createAsyncThunk('lecture/courseId/add-lecture', async (credentials, { rejectWithValue }) => {
    try {
      const data = await craeteLecture(credentials.courseId,credentials.newData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const editLectureAction = createAsyncThunk(`lecture/edit-lecture/lectureId`, async (credentials, { rejectWithValue }) => {
    try {
      const data = await editLecture(credentials.lectureId ,credentials.newData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const deleteLectureAction = createAsyncThunk(`lecture/delete-lecture/lectureId`, async (lectureId, { rejectWithValue }) => {
    try {
      const data = await deleteLecture(lectureId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const getLectureById = createAsyncThunk(`lecture/lectureId`, async (courseId, { rejectWithValue }) => {
    try {
      const data = await lectureInfo(courseId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const getLecturesInCourse = createAsyncThunk(`lecture/lectures/all`, async (_, { rejectWithValue }) => {
    try {
      const data = await lecturesData();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});