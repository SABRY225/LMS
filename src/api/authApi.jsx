import axiosInstance from "./axiosInstance";

export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("auth/login", credentials);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const register = async (credentials) => {
    try {
      const response = await axiosInstance.post("auth/register", credentials);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const forgetPassword = async (emailUser) => {
    try {
      const response = await axiosInstance.put("auth/forget-password", { email: emailUser });
      return response.data;
    } catch (error) {
      return error;
    }
};

export const refreshToken = async (token) => {
    try {
      const response = await axiosInstance.post("auth/refresh-token",token);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const verifyOtp = async (otpData) => {
    try {
      const response = await axiosInstance.post("auth/verify-otp", otpData);
      return response.data;
    } catch (error) {
      return error;
    }
  };
  
export const sendOtp = async (emailUser) => {
    try {
      const response = await axiosInstance.post("auth/send-otp", { email: emailUser });
      return response.data;
    } catch (error) {
      return error;
    }
};
  