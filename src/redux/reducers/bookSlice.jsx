import { createSlice } from '@reduxjs/toolkit';
import { addBookAction, deleteBookAction, editBookAction, getBookById, getBooksInCourse } from '../actions/bookAction';


const initialState = {
  books: [],
  book: null,
  booksInCourse: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBookAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBookAction.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload);
      })
      .addCase(addBookAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Edit book
      .addCase(editBookAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(editBookAction.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.books.findIndex((book) => book.id === action.payload.id);
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      })
      .addCase(editBookAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Delete book
      .addCase(deleteBookAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBookAction.fulfilled, (state, action) => {
        state.loading = false;
        state.books = state.books.filter((book) => book.id !== action.payload);
      })
      .addCase(deleteBookAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get books in course
      .addCase(getBooksInCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooksInCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.booksInCourse = action.payload;
      })
      .addCase(getBooksInCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get book by ID
      .addCase(getBookById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBookById.fulfilled, (state, action) => {
        state.loading = false;
        state.book = action.payload;
      })
      .addCase(getBookById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
