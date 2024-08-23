import { createAsyncThunk } from '@reduxjs/toolkit';
import { bookInfo, booksData, craeteBook, deletebook, editBook } from '../../api/bookApi';

export const addBookAction = createAsyncThunk('book/courseId/add-book', async (credentials, { rejectWithValue }) => {
    try {
      const data = await craeteBook(credentials.courseId,credentials.newData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const editBookAction = createAsyncThunk(`course/edit-book/bookId`, async (credentials, { rejectWithValue }) => {
    try {
      const data = await editBook(credentials.courseId,credentials.newData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const deleteBookAction = createAsyncThunk(`course/delete-book/bookId`, async (bookId, { rejectWithValue }) => {
    try {
      const data = await deletebook(bookId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const getBookById = createAsyncThunk(`course/bookId`, async (bookId, { rejectWithValue }) => {
    try {
      const data = await bookInfo(bookId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const getBooksInCourse = createAsyncThunk(`book/books/all`, async (_, { rejectWithValue }) => {
    try {
      const data = await booksData();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});