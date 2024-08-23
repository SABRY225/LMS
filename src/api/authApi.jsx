import axiosInstance from "./axiosInstance";

export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("auth/login", credentials,{headers:{"Content-Type" : "application/json"}});
    return response.data;
  } catch (error) {
    return error;
  }
};

export const register = async (credentials) => {
    try {
      console.log(credentials);
      const response = await axiosInstance.post("auth/register", credentials,{headers:{"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
};

export const forgetPassword = async (email) => {
    try {
      const response = await axiosInstance.put("auth/forget-password", email,{headers:{"Content-Type" : "application/json"}});
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
      const response = await axiosInstance.post("auth/verify-otp", otpData,{headers:{"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
  
export const sendOtp = async (email) => {
    try {
      const response = await axiosInstance.post("auth/send-otp", email,{headers:{"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
};
  