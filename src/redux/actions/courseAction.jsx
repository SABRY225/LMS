import { createAsyncThunk } from '@reduxjs/toolkit';
import { courseInfo, coursesByStudent, coursesByTeacher, coursesData, craeteCourse, deleteCourse, editCourse } from '../../api/courseApi';

export const addCourseAction = createAsyncThunk('course/add-course', async (credentials, { rejectWithValue }) => {
    try {
      const data = await craeteCourse(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const editCourseAction = createAsyncThunk(`course/edit-course/courseId`, async (credentials, { rejectWithValue }) => {
    try {
      const data = await editCourse(credentials.courseId,credentials.newData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const deleteCourseAction = createAsyncThunk(`course/delete-course/courseId`, async (courseId, { rejectWithValue }) => {
    try {
      const data = await deleteCourse(courseId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const getCourseById = createAsyncThunk(`course/courseId`, async (courseId, { rejectWithValue }) => {
    try {
      const data = await courseInfo(courseId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const getCourses = createAsyncThunk(`course/courses/all`, async (_, { rejectWithValue }) => {
    try {
      const data = await coursesData();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const getCoursesByTeacher = createAsyncThunk(`course/courses-by-teacher/teacherId`, async (teacherId, { rejectWithValue }) => {
  try {
    const data = await coursesByTeacher(teacherId);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getCoursesByStudent = createAsyncThunk(`course/courses-by-student/studentId`, async (studentId, { rejectWithValue }) => {
  try {
    const data = await coursesByStudent(studentId);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});