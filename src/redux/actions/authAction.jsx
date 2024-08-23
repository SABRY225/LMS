import { createAsyncThunk } from '@reduxjs/toolkit';
import { forgetPassword, login, refreshToken, register, sendOtp, verifyOtp } from '../../api/authApi';

 
export const signInUser = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
      const data = await login(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const signUpUser = createAsyncThunk('auth/register', async (credentials, { rejectWithValue }) => {
    try {
      const data = await register(credentials);
      return data;
    } catch (error) {
            // Extract the relevant information from the error object
            const errorMessage = error.response?.data?.message || error.message;
            const errorStatus = error.response?.status;
    
            // Pass only the serializable data
            return rejectWithValue({ message: errorMessage, status: errorStatus });
    }
});

export const requestPasswordReset = createAsyncThunk('auth/forget-password', async (email, { rejectWithValue }) => {
    try {
      const data = await forgetPassword(email);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const refreshAuthToken = createAsyncThunk('auth/refresh-token', async (token, { rejectWithValue }) => {
    try {
      const data = await refreshToken(token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
});

export const verifyOtpCode = createAsyncThunk('auth/verifyOtp', async (otpData, { rejectWithValue }) => {
    try {
        const response = await verifyOtp(otpData);
        console.log(response);
        return response; 
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const sendOtpEmail = createAsyncThunk('Account/send-otp', async (email, { rejectWithValue }) => {
  try {
    const data = await sendOtp(email);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});