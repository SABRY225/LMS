import { createSlice } from '@reduxjs/toolkit';
import { refreshAuthToken, requestPasswordReset, sendOtpEmail, signInUser, signUpUser, verifyOtpCode } from '../actions/authAction';
import { deleteUserAction, editInfoUser, fetchCurrentUser,fetchUsers} from '../actions/userAction';

const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    userImg:null,
    email: null,
    phone: null,
    address: null,
    token: null,
    loading: false,
    role: null,
    error: null,
    msg:null,
    users:[]
  };
  
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logout(state) {
        state.token = null;
        state.role = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(signInUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(signInUser.fulfilled, (state, action) => {
          state.loading = false;
          state.token = action.payload.Token;
          state.role = action.payload.Role;
          state.msg = action.payload.message;
        })
        .addCase(signInUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(refreshAuthToken.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(refreshAuthToken.fulfilled, (state, action) => {
          state.loading = false;
          state.token = action.payload.token;
        })
        .addCase(refreshAuthToken.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(signUpUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(signUpUser.fulfilled, (state,action) => {
          state.loading = false;
          state.mag = action.payload;
        })
        .addCase(signUpUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(verifyOtpCode.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(verifyOtpCode.fulfilled, (state, action) => {
          state.loading = false;
          state.msg = action.payload;
        })
        .addCase(verifyOtpCode.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(sendOtpEmail.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(sendOtpEmail.fulfilled, (state,action) => {
          state.loading = false;
          state.msg = action.payload.message;
        })
        .addCase(sendOtpEmail.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(fetchCurrentUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCurrentUser.fulfilled, (state, action) => {
          state.loading = false;          
          state.id = action.payload._id;
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
          state.email = action.payload.email;
          state.phone = action.payload.phone;
          state.address = action.payload.address;
          state.userImg = action.payload.userImg;
        })
        .addCase(fetchCurrentUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(fetchUsers.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(editInfoUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(editInfoUser.fulfilled, (state, action) => {
          state.loading = false;
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
          state.userImg = action.payload.userImg;
          state.address = action.payload.address;
        })
        .addCase(editInfoUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(deleteUserAction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteUserAction.fulfilled, (state, action) => {
          state.loading = false;
          state.users = state.users.filter((user) => user.id !== action.payload);
        })
        .addCase(deleteUserAction.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(requestPasswordReset.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(requestPasswordReset.fulfilled, (state,action) => {
          state.loading = false;
          state.msg = action.payload.message;
        })
        .addCase(requestPasswordReset.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
    },
  });
  
export const { logout} = authSlice.actions;

export default authSlice.reducer;