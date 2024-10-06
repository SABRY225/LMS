import { createAsyncThunk } from '@reduxjs/toolkit';
import { craeteLecture, deleteLecture, editLecture, lectureInfo, lecturesData ,getLecturesByTeacher} from '../../api/lecture.Api';

export const addLectureAction = createAsyncThunk('lecture/courseId/add-lecture', async (credentials, { rejectWithValue }) => {
    try {
      const data = await craeteLecture(credentials.courseId,credentials.newData,credentials.token);
      console.log(data);
      
      if (data != 'Lecture added to course successfully') {
        return rejectWithValue(data);
        }else
        return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const editLectureAction = createAsyncThunk(`lecture/edit-lecture/lectureId`, async (credentials, { rejectWithValue }) => {
    try {
      const data = await editLecture(credentials.formData,credentials.lectureId );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const deleteLectureAction = createAsyncThunk(`lecture/delete-lecture/lectureId`, async (credentials, { rejectWithValue }) => {
    try {
      const data = await deleteLecture(credentials.lectureId,credentials.token);
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

export const getLecturesInCourse = createAsyncThunk(`lecture/lectures/courseId`, async (courseId, { rejectWithValue }) => {
    try {
      const data = await lecturesData(courseId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const fetchLecturesByTeacher = createAsyncThunk(`lecture/lecturesbyteacer/teacherId`, async (credentials, { rejectWithValue }) => {
  try {
    const data = await getLecturesByTeacher(credentials);
    console.log(data);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});